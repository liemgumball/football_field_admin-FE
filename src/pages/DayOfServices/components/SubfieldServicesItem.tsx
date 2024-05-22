import { QueryObserverResult } from '@tanstack/react-query'
import SubfieldServiceSkeleton from './SubfieldServiceSkeleton'
import { TDayOfServices } from '@/types'
import { User2Icon } from 'lucide-react'
import { format } from 'date-fns'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import TurnOfServiceItem from './TurnOfServiceItem'
import { ScrollArea } from '@/components/ui/scroll-area'

type TProps = QueryObserverResult<TDayOfServices[]>

// TODO css
const SubfieldServicesItem = (props: TProps) => {
	const { data, isLoading, isError, error } = props

	if (isLoading) return <SubfieldServiceSkeleton />

	if (isError)
		return (
			<p className="text-destructive">{error.message || 'An error occurred'}</p>
		)

	if (!data?.length)
		return <p className="text-muted-foreground">Data not found.</p>

	const { subfield, date, turnOfServices, _id } = data[0]

	return (
		<Card className="space-y-2 overflow-hidden rounded-md border p-2">
			<CardHeader className="flex flex-row justify-between">
				<div>
					<CardTitle>{subfield?.name || 'Subfield'}</CardTitle>
					<CardDescription className="text-sm text-muted-foreground">
						{format(date, 'PPP')}
					</CardDescription>
				</div>
				<div className="flex items-center">
					<User2Icon className="mr-1 text-primary" size={16} />{' '}
					<span>{subfield?.size}</span>
				</div>
			</CardHeader>
			<Separator />
			<CardContent>
				<ScrollArea className="pr-4">
					<ul className="max-h-96 space-y-2">
						{turnOfServices.map((turn) => (
							<TurnOfServiceItem key={turn.at} _id={_id} {...turn} />
						))}
					</ul>
				</ScrollArea>
			</CardContent>
		</Card>
	)
}

export default SubfieldServicesItem
