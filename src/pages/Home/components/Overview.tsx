import { revenues } from '@/mocks/revenue-data'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Overview = () => {
	return (
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
	)
}

export default Overview
