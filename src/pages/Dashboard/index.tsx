import { Outlet } from 'react-router-dom'
import DashboardHeader from './components/DashboardHeader'
import { Suspense } from 'react'
import { Icons } from '@/components/Icons'
import useFootballFieldQuery from './hooks/useFootballFieldQuery'
import FootballFieldHeader from './components/FootballFieldHeader'

export const Dashboard = () => {
	useFootballFieldQuery()

	return (
		<div className="my-8 flex w-full min-w-min max-w-screen-xl flex-col space-y-4 rounded-2xl border-2 px-8 py-8 shadow-md">
			<DashboardHeader />
			<Suspense
				fallback={<Icons.Loader size={70} className="container my-16" />}
			>
				<FootballFieldHeader />
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Dashboard
