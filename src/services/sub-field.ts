import { TFootballField } from '@/types'

export const getSubFieldDetails = (
	field: TFootballField,
	subfieldId: string | undefined,
) => {
	return field.subfields?.find((subfield) => subfield._id === subfieldId)
}
