import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { revenues } from '@/mocks/revenue-data'
import { TSubField } from '@/types'
import { formatPrice } from '@/utils/price'
import { format } from 'date-fns'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const SubFieldRevenue = (props: TSubField) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-4xl font-semibold capitalize">
					total revenue
				</CardTitle>
				<CardDescription>
					<p>Last Updated: {format(props.updatedAt, 'PPP')}</p>
					<p>Total Price: {formatPrice(Math.random() * 500)}</p>
				</CardDescription>
			</CardHeader>
			<ResponsiveContainer width="100%" height={360}>
				<BarChart data={revenues}>
					<XAxis
						dataKey="name"
						stroke="#888888"
						fontSize={12}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis
						stroke="#888888"
						fontSize={12}
						tickLine={false}
						axisLine={false}
						tickFormatter={(value) => `${value}`}
					/>
					<Bar
						dataKey="total"
						fill="currentColor"
						radius={[4, 4, 0, 0]}
						className="fill-primary"
					/>
				</BarChart>
			</ResponsiveContainer>
		</Card>
	)
}

export default SubFieldRevenue
