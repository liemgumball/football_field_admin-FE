import { getFootballField } from '@/services/football-field'
import useAuthStore from '@/stores/auth'
import useFootballFieldStore from '@/stores/football-field'
import { TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const useFootballFieldQuery = () => {
	const admin = useAuthStore((state) => state.user)

	if (!admin) throw new Error('Not authenticated')

	const query = useQuery<TFootballField>({
		queryKey: ['football-field', admin._id],
		queryFn: () => getFootballField(admin._id),
		staleTime: 10 * 1000,
	})

	const set = useFootballFieldStore((state) => state.set)

	const { data: field, refetch, isStale, isFetching } = query

	useEffect(() => {
		set({ field, refetch, isStale, isFetching })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [set, query])

	return query
}

export default useFootballFieldQuery
