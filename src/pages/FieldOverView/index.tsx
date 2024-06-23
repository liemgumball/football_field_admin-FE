import { Icons } from '@/components/Icons'
import RatingItem from '@/components/RatingItem'
import { getFootballField } from '@/services/football-field'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense } from 'react'
import OverviewTab from './tabs/OverViewTab'

const FieldOverView = () => {
	const { fieldId } = useParams()

	if (!fieldId) throw new Error('Field Id not specified!')

	const {
		isLoading,
		isError,
		error,
		data: field,
	} = useQuery({
		queryKey: ['football-fields', fieldId],
		queryFn: () => getFootballField(fieldId),
	})

	if (isLoading) return <Icons.Loader size={64} className="container" />

	if (isError)
		return (
			<h2 className="text-xl font-semibold text-destructive">
				{error.message}
			</h2>
		)

	if (!field)
		return (
			<p className="text-base text-muted-foreground">
				No football field found!
			</p>
		)

	return (
		<div className="mt-4 space-y-4">
			<header className="space-y-2">
				<h1>{field.name}</h1>
				<RatingItem rating={field.rating} />
				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
						<TabsTrigger value="reports" disabled>
							Reports
						</TabsTrigger>
						<TabsTrigger value="notifications" disabled>
							Chats
						</TabsTrigger>
					</TabsList>

					<Suspense
						fallback={<Icons.Loader size={60} className="container my-16" />}
					>
						<TabsContent value="overview">
							<OverviewTab />
						</TabsContent>
						<TabsContent value="analytics"></TabsContent>
					</Suspense>
				</Tabs>
			</header>
		</div>
	)
}

export default FieldOverView
