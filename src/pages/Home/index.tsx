import { Suspense, lazy } from 'react'
// import useFootballFieldQuery from '../Dashboard/hooks/useFootballFieldQuery'

import { Icons } from '@/components/Icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useOutletContext } from 'react-router-dom'
import { TFootballFieldContext } from '@/types'

const OverviewTab = lazy(() => import('./tabs/OverviewTab'))
const SubfieldsTab = lazy(() => import('./tabs/SubfieldsTab'))

const Home = () => {
	const { field } = useOutletContext() as TFootballFieldContext

	return (
		<div className="space-y-4 py-8">
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
