import { Outlet } from 'react-router-dom'
import DashboardHeader from './components/DashboardHeader'

export const Dashboard = () => {
	return (
		<div className="my-8 flex w-full max-w-screen-xl flex-col rounded-2xl border-4 px-4 py-8">
			<DashboardHeader />
			<Outlet />
		</div>
	)
}

export default Dashboard
