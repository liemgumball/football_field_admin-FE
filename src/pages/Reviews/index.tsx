import useReviewQuery from './hooks/useReviewQuery'

const Reviews = () => {
	const { data } = useReviewQuery()

	return <div>{JSON.stringify(data)}</div>
}

export default Reviews
