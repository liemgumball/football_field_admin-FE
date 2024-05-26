import { TFootballField, TSubField } from '@/types'
import apiRequest from './common'
import { ENV_VARS } from '@/constants/envVars'

export const getSubFieldDetails = (
	field: TFootballField,
	subfieldId: string | undefined,
) => {
	return field.subfields?.find((subfield) => subfield._id === subfieldId)
}

export const updateSubfield = (
	id: string,
	fieldId: string,
	data: Partial<Omit<TSubField, 'size'> & { size: string }>,
) =>
	apiRequest(`fields/${fieldId}/subfields/${id}`, {
		data,
		method: 'PATCH',
		withCredentials: true,
	})

type TImageFetchResponse = {
	filePath: string
}

export const uploadImage = async (data: FormData) => {
	const response = await fetch(`${ENV_VARS.IMAGE_SERVER_URL}/upload`, {
		method: 'POST',
		body: data,
	})

	if (!response.ok) throw response

	const content = (await response.json()) as TImageFetchResponse

	if (!content.filePath.startsWith(ENV_VARS.IMAGE_SERVER_URL))
		throw new Error('Failed to save file.')

	return content.filePath
}
