import DayOfServicesForm from './components/DayOfServicesForm'
import SubfieldServicesList from './components/SubfieldServicesList'

const DayOfServices = () => {
	return (
		<main className="space-y-4">
			<header className="py-2">
				<DayOfServicesForm />
				<SubfieldServicesList />
			</header>
		</main>
	)
}

export default DayOfServices
