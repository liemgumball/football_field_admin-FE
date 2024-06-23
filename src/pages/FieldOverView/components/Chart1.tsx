import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area } from 'recharts'
import { revenues } from '@/mocks/revenue-data'

const Chart1 = () => {
	return (
		<ResponsiveContainer width="100%" minWidth={800} height={300}>
			<AreaChart data={revenues}>
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

				<Area
					dataKey="total"
					fill="currentColor"
					type="monotone"
					stroke="none"
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default Chart1
