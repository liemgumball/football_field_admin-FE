import { CHART_FILL_CLASS_NAME } from '@/constants/charts'
import {
	Pie,
	PieChart,
	Cell,
	ResponsiveContainer,
	PieLabelRenderProps,
} from 'recharts'

const renderCustomizedLabel = ({ percent, index }: PieLabelRenderProps) => {
	return percent && index === 0 ? (
		<text
			className="fill-primary text-2xl font-medium"
			fill="currentColor"
			dominantBaseline="central"
			x="45%"
			y="50%"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	) : null
}

const Chart2 = ({ filled }: { filled: number }) => {
	const data = [
		{ name: 'A', value: filled },
		{ name: 'B', value: 100 - filled },
	]
	return (
		<ResponsiveContainer width="100%" height={180}>
			<PieChart>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="100%"
					paddingAngle={5}
					fill="currentColor"
					// className="fill-primary-foreground"
					width="100%"
					height="100%"
					label={renderCustomizedLabel}
					labelLine={false}
				>
					{data.map((_, index) => (
						<Cell
							key={`cell-${index}`}
							fill="currentColor"
							className={CHART_FILL_CLASS_NAME[index]}
							stroke="currentColor"
						/>
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	)
}

export default Chart2
