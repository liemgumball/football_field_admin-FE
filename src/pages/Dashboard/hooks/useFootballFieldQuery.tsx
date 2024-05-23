import { getFootballField } from '@/services/football-field'
import useAuthStore from '@/stores/auth'
import { TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useFootballFieldQuery = () => {
	const admin = useAuthStore((state) => state.user)
	if (!admin) throw new Error('Not authenticated')

	return useQuery<TFootballField>({
		queryKey: ['football-field', admin._id],
		queryFn: () => getFootballField(admin._id),
		staleTime: 10 * 1000,
	})
}

export default useFootballFieldQuery
