import { Input } from '@/components/ui/input'
import { MainNav } from './MainNav'

const DashboardHeader = () => {
	return (
		<header className="flex items-center justify-between border-b p-2">
			<MainNav />
			<Input placeholder="Search..." className="max-w-80" />
		</header>
	)
}

export default DashboardHeader
