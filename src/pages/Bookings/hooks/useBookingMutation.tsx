import { updateBooking } from '@/services/bookings'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TBooking, TFootballFieldContext } from '@/types'
import { useOutletContext } from 'react-router-dom'

const useBookingMutation = (id: string) => {
	const queryClient = useQueryClient()
	const { field } = useOutletContext() as TFootballFieldContext

	return useMutation({
		mutationFn: (data: Partial<TBooking>) => updateBooking(id, field._id, data),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ['bookings'] }),
	})
}

export default useBookingMutation
