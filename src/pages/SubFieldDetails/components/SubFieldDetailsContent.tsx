import { TSubField } from '@/types'
import { formatPrice } from '@/utils/price'
import SubFieldEditSheet from './SubFieldEditSheet'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import SubFieldImageDialog from './SubFieldImageDialog'

const SubFieldDetailsContent = (props: TSubField) => {
	const { _id, name, size, defaultPrice, image } = props

	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<div>
					<CardTitle className="max-w-max text-4xl font-semibold capitalize">
						subfield information
					</CardTitle>
					<CardDescription>{_id}</CardDescription>
				</div>
				<SubFieldEditSheet subfield={props} />
			</CardHeader>
			<CardContent className="flex w-full flex-row flex-wrap justify-between gap-2 px-8">
				<div className="space-y-1 text-lg">
					<p>Name: {name}</p>
					<p>Size: {size}</p>
					<p>Default Price: {formatPrice(defaultPrice || 0)}</p>
				</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<SubFieldImageDialog id={_id}>
								{image ? (
									<div className="max-w-max overflow-hidden rounded-lg border">
										<img src={image} alt="subfield image" />
									</div>
								) : (
									<div className="flex min-h-36 min-w-96 items-center justify-center rounded-lg border">
										<p className="text-muted-foreground">No image provided</p>
									</div>
								)}
							</SubFieldImageDialog>
						</TooltipTrigger>
						<TooltipContent>
							<p>Click to {image ? 'change' : 'add'} image</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</CardContent>
		</Card>
	)
}

export default SubFieldDetailsContent
