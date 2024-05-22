export function getInitialDate() {
	const date = new Date()

	date.setUTCDate(date.getDate())
	date.setUTCHours(0, 0, 0, 0)
	return date
}

export function formatDate(date: Date): string {
	date.setUTCDate(date.getDate())
	date.setUTCHours(0, 0, 0, 0)

	return date.toISOString()
}
