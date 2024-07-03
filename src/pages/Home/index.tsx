import { Suspense, lazy, useMemo } from 'react'
// import useFootballFieldQuery from '../Dashboard/hooks/useFootballFieldQuery'

import { Icons } from '@/components/Icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useOutletContext } from 'react-router-dom'
import { TFootballField } from '@/types'
import { getAnalytic } from '@/mocks/analytic-data'

const OverviewTab = lazy(() => import('./tabs/OverviewTab'))
const SubfieldsTab = lazy(() => import('./tabs/SubfieldsTab'))

const Home = () => {
	const field = useOutletContext() as TFootballField
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const analytics = useMemo(() => getAnalytic(), [field])

	return (
		<div className="space-y-4 py-8">
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="subfields">Subfields</TabsTrigger>
				</TabsList>

				<Suspense
					fallback={<Icons.Loader size={60} className="container my-16" />}
				>
					<TabsContent value="overview">
						<OverviewTab {...analytics} />
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
