import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DollarSignIcon,
	PieChartIcon,
	Users2Icon,
	StarIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Chart1 from '../components/Chart1'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Chart2 from '../components/Chart2'
import { analytic } from '@/mocks/analytic-data'
import { formatPrice } from '@/utils/price'
import Chart3 from '../components/Chart3'

const OverviewTab = () => {
	return (
		<div className="grid gap-4 md:grid-cols-6 lg:grid-cols-12">
			<Card className="overflow-x-auto md:col-span-6 lg:col-span-12">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Revenue 2023</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea>
						<Chart1 />
						<ScrollBar orientation="horizontal" className="h-1.5" />
					</ScrollArea>
				</CardContent>
			</Card>
			<Card className="md:col-span-2 lg:col-span-4">
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
						{formatPrice(analytic.total_revenue)}
					</div>
					<p className="text-xs text-muted-foreground">
						+20.1% from last month
					</p>
				</CardContent>
			</Card>
			<Card className="md:col-span-2 md:row-start-3 lg:col-span-4">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Customers</CardTitle>
					<Button variant="ghost" size="icon" asChild>
						<Link to="">
							<Users2Icon size={16} className="text-muted-foreground" />
						</Link>
					</Button>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{analytic.customers}</div>
					<p className="text-xs text-muted-foreground">
						{((analytic.customers - 300) / 100).toFixed(2)}% from last month
					</p>
				</CardContent>
			</Card>
			<Card className="md:col-span-2 md:row-span-2 lg:col-span-4">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Filled</CardTitle>
					<Button variant="ghost" size="icon" asChild>
						<Link to="">
							<PieChartIcon size={16} className="text-muted-foreground" />
						</Link>
					</Button>
				</CardHeader>
				<CardContent>
					<Chart2 filled={analytic.filled} />
					<CardDescription>
						{(analytic.filled - 75).toFixed(1)}% from last month
					</CardDescription>
				</CardContent>
			</Card>
			<Card className="md:col-span-2 md:row-span-2 lg:col-span-4">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Monthly Rating</CardTitle>
					<Button variant="ghost" size="icon" asChild>
						<Link to="">
							<StarIcon size={16} className="text-muted-foreground" />
						</Link>
					</Button>
				</CardHeader>
				<CardContent>
					<Chart3 rating={analytic.rating} />
					<CardDescription>
						{(analytic.rating - 3.5).toFixed(1)} from last month
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	)
}

export default OverviewTab
