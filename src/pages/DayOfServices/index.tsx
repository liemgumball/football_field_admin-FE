import DayOfServicesForm from './components/DayOfServicesForm'
import SubfieldServicesList from './components/SubfieldServicesList'

const DayOfServices = () => {
	return (
		<main className="space-y-4">
			<DayOfServicesForm />
			<SubfieldServicesList />
		</main>
	)
}

export default DayOfServices
