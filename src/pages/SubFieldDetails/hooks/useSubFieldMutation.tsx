import { updateSubfield } from '@/services/sub-field'
import { TFootballField, TSubField } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useSubFieldMutation = (id: string) => {
	const query = useQueryClient()
	const field = useOutletContext<TFootballField>()

	return useMutation({
		mutationKey: ['subfield', id],

		mutationFn: (data: Partial<Omit<TSubField, 'size'> & { size: string }>) =>
			updateSubfield(id, field._id, data),

		onSettled: () =>
			query.invalidateQueries({
				queryKey: ['football-field'],
			}),
	})
}

export default useSubFieldMutation
