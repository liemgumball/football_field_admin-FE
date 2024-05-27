import apiRequest from './common'

export const getReviews = (fieldId: string) =>
	apiRequest(`/fields/${fieldId}/reviews`, { withCredentials: true })
