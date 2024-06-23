const RatingItem = ({ rating }: { rating: number | null }) => {
	return (
		<p className="text-xl text-muted-foreground">
			Rating - {rating ? rating.toFixed(1) : 'No rating'}
		</p>
	)
}

export default RatingItem
