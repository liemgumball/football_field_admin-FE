import { Separator } from '@/components/ui/separator'
import SidebarNav from './components/SidebarNav'
import { Outlet, useOutletContext } from 'react-router-dom'
import { Suspense } from 'react'
import { Icons } from '@/components/Icons'
import { TFootballField } from '@/types'

const sidebarNavItems = [
	{
		title: 'Overview',
		href: '',
	},
	{
		title: 'Location',
		href: 'location',
	},
	{
		title: 'Account',
		href: 'account',
	},
]

const Setting = () => {
	const field = useOutletContext<TFootballField>()
	return (
		<div className="hidden space-y-6 p-10 pb-16 md:block">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">
					Manage your account settings and football field settings.
				</p>
			</div>
			<Separator className="my-6" />
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
				<aside className="-mx-4 lg:w-1/5">
					<SidebarNav items={sidebarNavItems} />
				</aside>
				<div className="flex-1 lg:max-w-2xl">
					<Suspense
						fallback={<Icons.Loader size={32} className="container my-10" />}
					>
						<Outlet context={field} />
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default Setting
