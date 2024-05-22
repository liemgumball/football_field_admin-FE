import { TDayOfServices } from '@/types'
import apiRequest from './common'

export const geTDayOfServicesBySubfieldId = (
	subfieldId: string,
	date: string,
) =>
	apiRequest(`day-of-services/subfields/${subfieldId}?date=${date}`, {
		withCredentials: true,
	})

export const updateDayOfServices = (
	_id: string,
	fieldId: string,
	data: Partial<TDayOfServices>,
) =>
	apiRequest(`fields/${fieldId}/day-of-services/${_id}`, {
		withCredentials: true,
		data,
		method: 'PATCH',
	})
