import useFootballFieldStore from '@/stores/football-field'
import { useBookingsQuery } from './hooks/useBookingsQuery'
import { Icons } from '@/components/Icons'
import DataTable from './components/DataTable'
import Columns from './components/Columns'

const Bookings = () => {
	const field = useFootballFieldStore((state) => state.field)
	if (!field) throw new Error('Field not found')

	const { data, isLoading } = useBookingsQuery(field._id)

	if (isLoading) return <Icons.Loader />

	return (
		<main className="container my-4">
			{data && <DataTable data={data} columns={Columns} />}
		</main>
	)
}

export default Bookings
