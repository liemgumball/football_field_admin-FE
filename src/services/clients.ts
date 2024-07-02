import apiRequest from './common'

export const getCustomers = () =>
	apiRequest('users?customer=true', { withCredentials: true })

export const getAdmins = () =>
	apiRequest('users?admin=true', { withCredentials: true })
