import { updateBooking } from '@/services/bookings'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useFootballFieldStore from '@/stores/football-field'
import { TBooking } from '@/types'

const useBookingMutation = (id: string) => {
	const queryClient = useQueryClient()
	const field = useFootballFieldStore((state) => state.field)

	if (!field) throw new Error('Field not found')

	return useMutation({
		mutationFn: (data: Partial<TBooking>) => updateBooking(id, field._id, data),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ['bookings'] }),
	})
}

export default useBookingMutation
