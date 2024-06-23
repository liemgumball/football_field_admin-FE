import { getFootballField } from '@/services/football-field'
import useAuthStore from '@/stores/auth'
import { TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useFootballFieldQuery = () => {
	const admin = useAuthStore((state) => state.user)
	if (!admin) throw new Error('Not authenticated')

	return useQuery<TFootballField>({
		queryKey: ['football-field', admin.fieldId],
		queryFn: () => getFootballField(admin.fieldId),
		staleTime: 10 * 1000,
		refetchOnWindowFocus: true,
	})
}

export default useFootballFieldQuery
