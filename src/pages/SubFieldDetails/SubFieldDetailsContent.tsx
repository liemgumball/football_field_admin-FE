import { Separator } from '@/components/ui/separator'
import { TSubField } from '@/types'
import { formatPrice } from '@/utils/price'
import { format } from 'date-fns'

const SubFieldDetailsContent = ({ subfield }: { subfield: TSubField }) => {
	return (
		<section className="space-y-2 text-base font-normal md:text-lg">
			<h3 className="text-3xl font-semibold capitalize">
				subfield information
			</h3>
			<Separator />
			<p>SubField ID: {subfield._id}</p>
			<p>Name: {subfield.name}</p>
			<p>Size: {subfield.size}</p>
			<p>Default Price: {formatPrice(subfield.defaultPrice || 0)}</p>
			<Separator />
			<h3 className="text-3xl font-semibold capitalize">total revenue</h3>
			<p>Last Updated: {format(subfield.updatedAt, 'PPP')}</p>
			<p>Total Price: {formatPrice(Math.random() * 500)}</p>
		</section>
	)
}

export default SubFieldDetailsContent
