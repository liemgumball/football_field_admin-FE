import { TBooking } from '@/types'
import apiRequest from './common'

export const getBookings = (fieldId: string) =>
	apiRequest(`fields/${fieldId}/bookings`, {
		withCredentials: true,
	})

export const getBookingDetails = (bookingId: string | undefined) =>
	apiRequest(`bookings/${bookingId}`, {
		withCredentials: true,
	})

export const updateBooking = (
	id: string,
	fieldId: string,
	data: Partial<TBooking>,
) =>
	apiRequest(`fields/${fieldId}/bookings/${id}`, {
		withCredentials: true,
		method: 'PATCH',
		data,
	})
