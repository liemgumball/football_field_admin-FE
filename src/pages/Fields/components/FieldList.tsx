import { Icons } from '@/components/Icons'
import { getAllFootballFields } from '@/services/football-field'
import { TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'
import FieldListItem from './FieldListItem'
import { useMemo } from 'react'

const FieldList = ({ debouncedSearch }: { debouncedSearch: string }) => {
	const { data, isLoading, isError, error } = useQuery<TFootballField[]>({
		queryKey: ['fields'],
		queryFn: () => getAllFootballFields(),
	})

	const fields = useMemo(
		() =>
			data?.filter((field) =>
				field.name.toLowerCase().includes(debouncedSearch),
			),
		[debouncedSearch, data],
	)

	if (isLoading) return <Icons.Loader size={64} className="container" />

	if (isError)
		return (
			<h2 className="text-xl font-semibold text-destructive">
				{error.message}
			</h2>
		)

	if (!fields?.length)
		return (
			<p className="text-base text-muted-foreground">
				No football field found!
			</p>
		)

	return (
		<>
			<p className="pl-4 text-sm text-muted-foreground">
				Total {fields.length} fields
			</p>
			<ul className="grid gap-2 xl:grid-cols-2">
				{fields.map((field) => (
					<FieldListItem {...field} key={field._id} />
				))}
			</ul>
		</>
	)
}

export default FieldList
