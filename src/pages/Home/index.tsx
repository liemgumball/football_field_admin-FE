import useFootballFieldQuery from './hooks/useFootballFieldQuery'
import { Icons } from '@/components/Icons'
import FootballFieldHeader from './components/FootballFieldHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Home = () => {
	const {
		data: field,
		refetch,
		isLoading,
		isError,
		error,
		isFetching,
	} = useFootballFieldQuery()

	if (isLoading) return <Icons.Loader size={80} className="container my-16" />

	if (isError) return <p className="text-destructive"> {error.message} </p>

	return (
		<div className="space-y-4 py-8">
			<FootballFieldHeader
				isFetching={isFetching}
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
					<p>{JSON.stringify(field)}</p>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Home
