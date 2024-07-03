import { Icons } from '@/components/Icons'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useDebounce from '@/hooks/useDebounce'
import { Suspense, useState } from 'react'
import FieldOwnersTab from './tabs/FieldOwnersTab'
import CustomersTab from './tabs/CustomersTab'

const Clients = () => {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 200)

	return (
		<>
			<header className="flex items-center justify-between gap-4">
				<h1>Clients</h1>
				<Input
					type="text"
					className="h-12 max-w-sm"
					placeholder="Search name ..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</header>
			<Separator />
			<Tabs defaultValue="customers">
				<TabsList>
					<TabsTrigger value="customers">Customers</TabsTrigger>
					<TabsTrigger value="field-owners">Field Owners</TabsTrigger>
				</TabsList>

				<Suspense
					fallback={<Icons.Loader size={60} className="container my-16" />}
				>
					<TabsContent value="customers" className="mt-6">
						<CustomersTab debouncedSearch={debouncedSearch} />
					</TabsContent>
					<TabsContent value="field-owners" className="mt-6">
						<FieldOwnersTab debouncedSearch={debouncedSearch} />
					</TabsContent>
				</Suspense>
			</Tabs>
		</>
	)
}

export default Clients
