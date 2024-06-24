export const getAnalytic = () => ({
	/**
	 * From 5000 to 8000.
	 */
	total_revenue: Math.random() * 30000 + 50000,
	/**
	 * Each month revenue from 1000 to 6000.
	 */
	revenues: [
		{
			name: 'Jan',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Feb',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Mar',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Apr',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'May',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Jun',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Jul',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Aug',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Sep',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Oct',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Nov',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
		{
			name: 'Dec',
			total: Math.floor(Math.random() * 5000) + 1000,
		},
	],
	/**
	 * From 60 to 80.
	 */
	filled: Math.random() * 20 + 60,
	/**
	 * From 3 to 4
	 */
	rating: Math.random() + 3,
	/**
	 * From 100 to 600.
	 */
	customers: Math.floor(Math.random() * 500) + 100,
})

const example = getAnalytic()

export type TAnalytic = typeof example
