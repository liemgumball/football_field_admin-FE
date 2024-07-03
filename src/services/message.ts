import { TMessage } from '@/types'
import apiRequest from './common'

export const getMessages = (receiverId: string) =>
	apiRequest(`message/${receiverId}`, { withCredentials: true })

export const createMessage = (
	data: Omit<TMessage, '_id' | 'createdAt' | 'senderId'>,
) => apiRequest('message/', { method: 'POST', withCredentials: true, data })
