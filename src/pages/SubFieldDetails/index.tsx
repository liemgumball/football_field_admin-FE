import { useOutletContext, useParams } from 'react-router-dom'
import { TFootballField, TSubField } from '@/types'
import { getSubFieldDetails } from '@/services/sub-field'
import { Icons } from '@/components/Icons'
import SubFieldDetailsContent from './SubFieldDetailsContent'
import { Separator } from '@/components/ui/separator'
// import { useQuery } from "@tanstack/react-query"

const SubFieldDetails = () => {
	const { id } = useParams()

	const field: TFootballField = useOutletContext()

	const subfield: TSubField | undefined = getSubFieldDetails(field, id)

	// const {
	//     data,
	//     isLoading,
	//     isError,
	// } = useQuery<TSubField>({
	//     queryKey: ['subfields', field._id, id],
	//     queryFn: () => getSubFieldDetails(field._id, id),
	// })

	if (!subfield) return <Icons.Loader size={60} className="container my-16" />

	return (
		<main className="space-y-4 ">
			<Separator />
			<div className="md:container md:max-w-max">
				<SubFieldDetailsContent subfield={subfield} />
			</div>
		</main>
	)
}

export default SubFieldDetails
