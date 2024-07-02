import { Input } from '@/components/ui/input'
import useDebounce from '@/hooks/useDebounce'
import { useState } from 'react'
import FieldList from './components/FieldList'

const Fields = () => {
	const [search, setSearch] = useState('')

	const debouncedSearch = useDebounce(search, 200)

	return (
		<>
			<div className="flex flex-wrap justify-between gap-4">
				<h1>All the Football Fields</h1>
				<Input
					type="text"
					placeholder="Search name ..."
					className="h-12 max-w-96"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<FieldList debouncedSearch={debouncedSearch.trim().toLowerCase()} />
		</>
	)
}

export default Fields
