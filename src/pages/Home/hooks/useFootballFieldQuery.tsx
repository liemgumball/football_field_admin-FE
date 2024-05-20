import { getFootballField } from '@/services/football-field'
import useAuthStore from '@/stores/auth'
import { useQuery } from '@tanstack/react-query'

const useFootballFieldQuery = () => {
	const admin = useAuthStore((state) => state.user)

	if (!admin) throw new Error('Not authenticated')

	return useQuery({
		queryKey: ['football-field', admin._id],
		queryFn: () => getFootballField(admin._id),
	})
}

export default useFootballFieldQuery
