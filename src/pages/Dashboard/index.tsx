import { Outlet } from 'react-router-dom'
import DashboardHeader from './components/DashboardHeader'

export const Dashboard = () => {
	return (
		<div className="my-8 flex w-full min-w-min max-w-screen-xl flex-col rounded-2xl border-2 px-8 py-8 shadow-md">
			<DashboardHeader />
			<Outlet />
		</div>
	)
}

export default Dashboard
