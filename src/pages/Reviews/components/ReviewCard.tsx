import Rating from '@/components/Rating'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import UserItem from '@/components/UserItem'
import { TBookingReview } from '@/types'

const ReviewCard = ({ review, user }: TBookingReview) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<UserItem {...user} />
				</CardTitle>
				<CardDescription className="flex gap-1">
					<Rating rating={review.rating} size={18} />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Textarea value={review.description} readOnly />
			</CardContent>
		</Card>
	)
}

export default ReviewCard
