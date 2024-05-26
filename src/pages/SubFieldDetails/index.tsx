import { useOutletContext, useParams } from 'react-router-dom'
import { TFootballField } from '@/types'
import { getSubFieldDetails } from '@/services/sub-field'
import { Icons } from '@/components/Icons'
import SubFieldDetailsContent from './components/SubFieldDetailsContent'
import SubFieldRevenue from './components/SubFieldRevenue'

const SubFieldDetails = () => {
	const { id } = useParams()

	const field: TFootballField = useOutletContext()

	const subfield = getSubFieldDetails(field, id)

	if (!subfield) return <Icons.Loader size={60} className="container my-16" />

	return (
		<main className="space-y-4 py-4">
			<SubFieldRevenue {...subfield} />
			<SubFieldDetailsContent {...subfield} />
		</main>
	)
}

export default SubFieldDetails
