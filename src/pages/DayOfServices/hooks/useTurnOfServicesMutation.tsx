import { updateDayOfServices } from '@/services/day-of-services'
import { TFootballFieldContext, TTurnOfService } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useTurnOfServicesMutation = (id: string) => {
	const { field } = useOutletContext() as TFootballFieldContext

	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: TTurnOfService) =>
			updateDayOfServices(id, field._id, { turnOfServices: [data] }),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: ['day-of-services'] }),
	})
}

export default useTurnOfServicesMutation
