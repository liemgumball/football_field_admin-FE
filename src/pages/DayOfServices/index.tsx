import useFootballFieldStore from '@/stores/football-field'
import DayOfServicesForm from './components/DayOfServicesForm'
import useDayOfServicesQueries from './hooks/DayOfServicesQuery'

const DayOfServices = () => {
	const field = useFootballFieldStore((state) => state.field)

	const dayOfServicesBySubfield = useDayOfServicesQueries(
		field?.subfieldIds || [],
	)

	return (
		<main className="space-y-4">
			<header className="py-2">
				<DayOfServicesForm />
				{dayOfServicesBySubfield.map((i) => JSON.stringify(i.data))}
			</header>
		</main>
	)
}

export default DayOfServices
