import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
	DialogFooter,
} from '@/components/ui/dialog'
import { CheckIcon, MinusCircleIcon } from 'lucide-react'
import useBookingMutation from '@/hooks/Bookings/useBookingMutation'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/Icons'

const BookingResponse = ({ _id }: { _id: string }) => {
	const { mutateAsync, isPending } = useBookingMutation(_id)

	const onConfirm = async () => {
		try {
			await mutateAsync({
				confirmed: true,
			})

			// Successfully
			toast({
				title: 'Confirm successfully',
			})
		} catch (error) {
			toast({
				title: 'Failed to confirm',
				description: await (error as Response).text(),
				variant: 'destructive',
			})
		}
	}

	const onRefuse = async () => {
		try {
			await mutateAsync({
				canceled: true,
			})

			// Successfully
			toast({
				title: 'Refuse successfully',
			})
		} catch (error) {
			toast({
				title: 'Failed to refuse',
				variant: 'destructive',
			})
		}
	}

	return (
		<div className="flex flex-col gap-2 p-2">
			<Dialog>
				<DialogTrigger>
					<Button size="sm" className="w-full">
						<CheckIcon className="mr-1" size={16} />
						Confirm
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure to confirm?</DialogTitle>
						<DialogDescription>This action cannot be undone.</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" asChild>
							<DialogClose>Cancel</DialogClose>
						</Button>
						<Button onClick={onConfirm}>
							{isPending && <Icons.Loader className="mr-1" />}
							Confirm
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger>
					<Button size="sm" className="w-full" variant="secondary">
						<MinusCircleIcon className="mr-1" size={16} />
						Refuse
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-destructive/90">
							Are you absolutely sure?
						</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently cancel the
							booking request from Client.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" asChild>
							<DialogClose>Cancel</DialogClose>
						</Button>
						<Button variant="destructive" onClick={onRefuse}>
							{isPending && <Icons.Loader className="mr-1" />}
							Refuse
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default BookingResponse
