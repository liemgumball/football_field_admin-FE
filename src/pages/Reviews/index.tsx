import ListReview from './components/ListReview'
import useReviewQuery from '@/hooks/Reviews/useReviewQuery'
import { Icons } from '@/components/Icons'

const Reviews = () => {
	const { data, isError, isLoading } = useReviewQuery()

	if (isLoading) return <Icons.Loader size={60} className="container my-16" />

	if (isError)
		return <p className="text-destructive">Fail to get reviews information</p>

	if (!data) return <p className="text-muted-foreground">Reviews not found</p>

	return (
		<main>
			<ListReview reviews={data} />
		</main>
	)
}

export default Reviews
