import apiRequest from './common'

export const getDayOfServicesBySubfieldId = (
	subfieldId: string,
	date: string,
) =>
	apiRequest(`day-of-services/subfields/${subfieldId}?date=${date}`, {
		withCredentials: true,
	})
