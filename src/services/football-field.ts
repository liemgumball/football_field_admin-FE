import { TFootballField } from '@/types'
import apiRequest from './common'

export const getFootballField = (id: string): Promise<TFootballField> =>
	apiRequest(`fields/${id}`, { withCredentials: true })

export const updateFootballField = (
	id: string,
	data: Partial<TFootballField>,
) =>
	apiRequest(`fields/${id}`, { withCredentials: true, data, method: 'PATCH' })

export const getAllFootballFields = (
	options: {
		name?: string
		rating?: number
	} = {},
): Promise<TFootballField[]> =>
	apiRequest(
		`fields${options ? `?admin=true${options.rating ? `&rating=${options.rating}` : ''}${options.name ? `&name=${options.name}` : ''}` : ''}`,
		{ withCredentials: true },
	)
