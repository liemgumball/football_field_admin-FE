import { Input } from '@/components/ui/input'
import useDebounce from '@/hooks/useDebounce'
import { useState } from 'react'
import FieldList from './components/FieldList'

const SuperUserHome = () => {
	const [search, setSearch] = useState('')

	const debouncedSearch = useDebounce(search, 200)

	return (
		<div className="container mt-2 space-y-4">
			<h1>All the Football Fields</h1>
			<Input
				type="text"
				placeholder="Search name ..."
				className="h-12 max-w-96"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<FieldList debouncedSearch={debouncedSearch.toLowerCase()} />
		</div>
	)
}

export default SuperUserHome
