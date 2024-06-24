import { getFootballField } from '@/services/football-field'
import useAuthStore from '@/stores/auth'
import { TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const useFootballFieldQuery = () => {
	const admin = useAuthStore((state) => state.user)
	if (!admin) throw new Error('Not authenticated')

	const { fieldId } = useParams()

	const id = fieldId ? fieldId : admin.fieldId

	return useQuery<TFootballField>({
		queryKey: ['football-field', id],
		queryFn: () => getFootballField(id),
		staleTime: 10 * 1000,
		refetchOnWindowFocus: true,
	})
}

export default useFootballFieldQuery
