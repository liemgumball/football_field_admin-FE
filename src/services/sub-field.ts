import { TFootballField, TSubField } from '@/types'
import apiRequest from './common'

export const getSubFieldDetails = (
	field: TFootballField,
	subfieldId: string | undefined,
) => {
	return field.subfields?.find((subfield) => subfield._id === subfieldId)
}

export const updateSubfield = (
	id: string,
	fieldId: string,
	data: Partial<Omit<TSubField, 'size'>> & { size: string },
) =>
	apiRequest(`fields/${fieldId}/subfields/${id}`, {
		data,
		method: 'PATCH',
		withCredentials: true,
	})
