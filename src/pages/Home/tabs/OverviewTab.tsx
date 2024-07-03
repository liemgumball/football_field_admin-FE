import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ActivityIcon,
	DollarSignIcon,
	PieChartIcon,
	Users2Icon,
	WalletIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Overview from '../components/Overview'
import RecentSales from '../components/RecentSales'
import { TAnalytic } from '@/mocks/analytic-data'
import { formatPrice } from '@/utils/price'

const OverviewTab = (props: TAnalytic) => {
	const { total_revenue, customers, filled, activities } = props

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
						<div className="text-2xl font-bold">
							{formatPrice(total_revenue)}
						</div>
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
							{((customers - 300) / 100).toFixed(2)}% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Filled</CardTitle>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<PieChartIcon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">92%</div>
						<p className="text-xs text-muted-foreground">
							{(filled - 75).toFixed(1)}% from last month
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
						<div className="text-2xl font-bold">{activities}</div>
						<p className="text-xs text-muted-foreground">
							+{60 - activities} since last hour
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
					<CardHeader className="flex flex-row items-center justify-between">
						<div className="space-y-2">
							<CardTitle>Recent Sales</CardTitle>
							<CardDescription>You made 265 sales this month.</CardDescription>
						</div>
						<Button variant="ghost" size="icon" asChild>
							<Link to="">
								<WalletIcon size={16} className="text-muted-foreground" />
							</Link>
						</Button>
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
