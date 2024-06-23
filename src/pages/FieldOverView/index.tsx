import { Icons } from '@/components/Icons'
import { getFootballField } from '@/services/football-field'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const FieldOverView = () => {
	const { fieldId } = useParams()

	if (!fieldId) throw new Error('Field Id not specified!')

	const {
		isLoading,
		isError,
		error,
		data: field,
	} = useQuery({
		queryKey: ['football-fields', fieldId],
		queryFn: () => getFootballField(fieldId),
	})

	if (isLoading) return <Icons.Loader size={64} className="container" />

	if (isError)
		return (
			<h2 className="text-xl font-semibold text-destructive">
				{error.message}
			</h2>
		)

	if (!field)
		return (
			<p className="text-base text-muted-foreground">
				No football field found!
			</p>
		)

	return <div>{JSON.stringify(field)}</div>
}

export default FieldOverView
