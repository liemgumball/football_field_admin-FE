import { Separator } from '@/components/ui/separator'
import { TSubField } from '@/types'
import { formatPrice } from '@/utils/price'
import { format } from 'date-fns'
import SubFieldEditSheet from './component/SubFieldEditSheet'

const SubFieldDetailsContent = ({ subfield }: { subfield: TSubField }) => {
	return (
		<section className="flex flex-wrap gap-2 text-base font-normal md:text-lg lg:flex-wrap lg:gap-24">
			<div className="space-y-2 rounded md:w-full md:border md:p-6 lg:max-w-max">
				<div className="flex items-center justify-between gap-3">
					<h3 className="text-3xl font-semibold capitalize">
						subfield information
					</h3>
					<SubFieldEditSheet subfield={subfield} />
				</div>
				<Separator />
				<p>SubField ID: {subfield._id}</p>
				<p>Name: {subfield.name}</p>
				<p>Size: {subfield.size}</p>
				<p>Default Price: {formatPrice(subfield.defaultPrice || 0)}</p>
			</div>
			<div className="h-[180px] space-y-2 rounded md:h-[200px] md:w-full md:border md:p-6 lg:h-[180px] lg:max-w-max">
				<h3 className="text-3xl font-semibold capitalize">total revenue</h3>
				<Separator />
				<p>Last Updated: {format(subfield.updatedAt, 'PPP')}</p>
				<p>Total Price: {formatPrice(Math.random() * 500)}</p>
			</div>
		</section>
	)
}

export default SubFieldDetailsContent
