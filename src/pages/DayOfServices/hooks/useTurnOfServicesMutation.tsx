import { updateDayOfServices } from '@/services/day-of-services'
import useFootballFieldStore from '@/stores/football-field'
import { TTurnOfService } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useTurnOfServicesMutation = (id: string) => {
	const field = useFootballFieldStore((state) => state.field)
	if (!field) throw new Error('Field not found')

	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: TTurnOfService) =>
			updateDayOfServices(id, field._id, { turnOfServices: [data] }),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: ['day-of-services'] }),
	})
}

export default useTurnOfServicesMutation
