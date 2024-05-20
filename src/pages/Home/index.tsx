import useFootballFieldQuery from './hooks/useFootballFieldQuery'
import { Icons } from '@/components/Icons'
import FootballFieldHeader from './components/FootballFieldHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OverviewTab from './tabs/OverviewTab'

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

	if (isError) return <p className="text-destructive"> {error.message} </p>

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
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="reports" disabled>
						Reviews
					</TabsTrigger>
					<TabsTrigger value="notifications" disabled>
						Notifications
					</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<OverviewTab />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Home
