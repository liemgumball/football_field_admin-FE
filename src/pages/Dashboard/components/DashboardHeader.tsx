import { Input } from '@/components/ui/input'
import { MainNav } from './MainNav'

const DashboardHeader = () => {
	return (
		<header className="flex flex-wrap items-center justify-between gap-4 border-b p-2">
			<MainNav />
			<Input placeholder="Search..." className="min-w-32 max-w-80" disabled />
		</header>
	)
}

export default DashboardHeader
