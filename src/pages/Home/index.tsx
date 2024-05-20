import { Suspense, lazy } from 'react'
import useFootballFieldQuery from './hooks/useFootballFieldQuery'

import { Icons } from '@/components/Icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FootballFieldHeader from './components/FootballFieldHeader'

const OverviewTab = lazy(() => import('./tabs/OverviewTab'))
const SubfieldsTab = lazy(() => import('./tabs/SubfieldsTab'))

const Home = () => {
	const {
		data: field,
		refetch,
		isLoading,
		isError,
		error,
		isFetching,
		isStale,
	} = useFootballFieldQuery()

	if (isLoading) return <Icons.Loader size={80} className="container my-16" />

	if (isError || !field)
		return (
			<p className="pt-4 text-center font-semibold text-destructive">
				{error?.message || 'Field not found.'}
			</p>
		)

	return (
		<div className="space-y-4 py-8">
			<FootballFieldHeader
				isFetching={isFetching}
				isStale={isStale}
				refetch={refetch}
				{...field}
			/>
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="subfields">Subfields</TabsTrigger>
					<TabsTrigger value="reports" disabled>
						Reviews
					</TabsTrigger>
					<TabsTrigger value="notifications" disabled>
						Notifications
					</TabsTrigger>
				</TabsList>

				<Suspense
					fallback={<Icons.Loader size={60} className="container my-16" />}
				>
					<TabsContent value="overview">
						<OverviewTab />
					</TabsContent>
					<TabsContent value="subfields">
						<SubfieldsTab subfields={field.subfields} />
					</TabsContent>
				</Suspense>
			</Tabs>
		</div>
	)
}

export default Home
