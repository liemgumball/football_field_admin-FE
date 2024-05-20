import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { TFootballField } from '@/types'
import {
	ActivityIcon,
	DollarSignIcon,
	Users2Icon,
	WalletIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Overview from '../components/Overview'
import RecentSales from '../components/RecentSales'

const OverviewTab = (props: Partial<TFootballField>) => {
	console.log(props)
	return (
		<div className="space-y-2">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<DollarSignIcon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">450,350,000 VND</div>
						<p className="text-xs text-muted-foreground">
							+20.1% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Customers</CardTitle>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<Users2Icon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+150</div>
						<p className="text-xs text-muted-foreground">
							+180.1% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Filled</CardTitle>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<WalletIcon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">92%</div>
						<p className="text-xs text-muted-foreground">
							+19% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Now</CardTitle>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<ActivityIcon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+573</div>
						<p className="text-xs text-muted-foreground">
							+201 since last hour
						</p>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-4 lg:grid-cols-7">
				<Card className="lg:col-span-4">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
					</CardHeader>
					<CardContent className="pl-2">
						<Overview />
					</CardContent>
				</Card>
				<Card className="lg:col-span-3">
					<CardHeader>
						<CardTitle>Recent Sales</CardTitle>
						<CardDescription>You made 265 sales this month.</CardDescription>
					</CardHeader>
					<CardContent>
						<RecentSales />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default OverviewTab
