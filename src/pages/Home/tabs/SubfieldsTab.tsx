import SubfieldCard from '@/components/SubfieldCard'
import { TFootballField } from '@/types'

const SubfieldsTab = ({ subfields }: Pick<TFootballField, 'subfields'>) => {
	return (
		<div className="grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
			{subfields?.map((subfield) => (
				<SubfieldCard key={subfield._id} {...subfield} />
			))}
		</div>
	)
}

export default SubfieldsTab
