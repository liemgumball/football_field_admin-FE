import { Icons } from '@/components/Icons'
import QRReader from '@/components/QRReader'
import RatingItem from '@/components/RatingItem'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { TFootballField } from '@/types'
import { useQueryClient } from '@tanstack/react-query'
import { QrCodeIcon } from 'lucide-react'
import { useState } from 'react'

type TProps = {
	field: TFootballField
	isFetching: boolean
	isStale: boolean
}

const FootballFieldHeader = (props: TProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const queryClient = useQueryClient()
	const { field, isFetching, isStale } = props

	// Refresh all queries
	const onClick = () => {
		queryClient.invalidateQueries()
	}

	return (
		<section className="flex items-center justify-between gap-4">
			<div>
				<h2>{field.name} </h2>
				<RatingItem rating={field.rating} />
			</div>
			<div className="flex gap-2">
				<TooltipProvider>
					<Tooltip>
						<Dialog open={isOpen} onOpenChange={setIsOpen}>
							<DialogTrigger asChild>
								<Button size="sm" variant="ghost" asChild>
									<TooltipTrigger>
										<QrCodeIcon />
									</TooltipTrigger>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Scan QR Code.</DialogTitle>
									<DialogDescription>
										Scan the QR code to see the booking information.
									</DialogDescription>
								</DialogHeader>
								<QRReader closeDialog={() => setIsOpen(false)} />
							</DialogContent>
						</Dialog>
						<TooltipContent>
							<p>Scan QR Code</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<Button
							onClick={onClick}
							size="sm"
							disabled={!isStale}
							variant="ghost"
							asChild
						>
							<TooltipTrigger>
								<Icons.Refresh isFetching={isFetching} />
							</TooltipTrigger>
						</Button>
						<TooltipContent>
							<p>Refresh</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</section>
	)
}

export default FootballFieldHeader
