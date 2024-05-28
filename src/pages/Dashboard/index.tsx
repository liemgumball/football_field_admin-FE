import { Outlet } from 'react-router-dom'
import DashboardHeader from './components/DashboardHeader'
import { Suspense } from 'react'
import { Icons } from '@/components/Icons'
import useFootballFieldQuery from '@/hooks/Dashboard/useFootballFieldQuery'
import FootballFieldHeader from './components/FootballFieldHeader'

export const Dashboard = () => {
	const {
		isLoading,
		isError,
		error,
		data: field,
		isStale,
		isFetching,
	} = useFootballFieldQuery()

	if (isLoading) return <Icons.Loader size={60} className="container my-16" />

	if (isError) return <h2>{error.message || 'An error occurred'}</h2>

	if (!field) return <h2 className="text-muted-foreground">Field not found!</h2>

	return (
		<div className="my-8 flex w-full max-w-screen-xl flex-col space-y-4 rounded-2xl border-2 px-8 py-8 shadow-md">
			<DashboardHeader />
			<Suspense
				fallback={<Icons.Loader size={70} className="container my-16" />}
			>
				<FootballFieldHeader
					isFetching={isFetching}
					isStale={isStale}
					field={field}
				/>
				<Outlet context={field} />
			</Suspense>
		</div>
	)
}

export default Dashboard
