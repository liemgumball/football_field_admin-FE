import useBookingsQuery from './hooks/useBookingsQuery'
import { Icons } from '@/components/Icons'
import DataTable from './components/DataTable'
import Columns from './components/Columns'

const Bookings = () => {
	const { data, isLoading } = useBookingsQuery()

	if (isLoading) return <Icons.Loader />

	return (
		<main className="container my-4">
			{data && <DataTable data={data} columns={Columns} />}
		</main>
	)
}

export default Bookings
