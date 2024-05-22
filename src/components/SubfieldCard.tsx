import { format } from 'date-fns'

import { TSubField } from '@/types'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card'
import { User2Icon } from 'lucide-react'
import { formatPrice } from '@/utils/price'
import { Link } from 'react-router-dom'

const SubfieldCard = (props: TSubField) => {
	const { _id, name, size, defaultPrice, updatedAt } = props

	return (
		<Link to={`subfields/${_id}`} className="w-full">
			<Card className="transition-colors hover:bg-muted/80">
				<CardHeader>
					<CardTitle className="flex justify-between">
						<p>{name}</p>
						<p className="space-x-2">
							<span className="align-middle">{size}</span>
							<User2Icon className="inline size-6" />
						</p>
					</CardTitle>
					<CardDescription>
						Last updated: {format(updatedAt, 'PPP')}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						<span className="mr-2 font-semibold">Default price</span>
						{formatPrice(defaultPrice || 0)}
					</p>
					<p>
						<span className="mr-2 font-semibold">Total revenue</span>
						{formatPrice(Math.random() * 500)}
					</p>
				</CardContent>
			</Card>
		</Link>
	)
}

export default SubfieldCard
