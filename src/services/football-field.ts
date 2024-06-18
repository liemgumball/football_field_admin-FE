import { TFootballField } from '@/types'
import apiRequest from './common'

export const getFootballField = (adminId: string): Promise<TFootballField> =>
	apiRequest(`fields/admin/${adminId}`, { withCredentials: true })

export const updateFootballField = (
	id: string,
	data: Partial<TFootballField>,
) =>
	apiRequest(`fields/${id}`, { withCredentials: true, data, method: 'PATCH' })
