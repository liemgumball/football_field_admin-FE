import { getReviews } from '@/services/reviews'
import { TBookingReview, TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useReviewQuery = () => {
	const field = useOutletContext<TFootballField>()

	return useQuery<TBookingReview[]>({
		queryKey: ['reviews', field._id],
		queryFn: () => getReviews(field._id),
	})
}

export default useReviewQuery
