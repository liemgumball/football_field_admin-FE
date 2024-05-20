import { Button } from '@/components/ui/button'
import useAuthStore from '@/stores/auth'

const Home = () => {
	const logout = useAuthStore((state) => state.remove)

	return (
		<div>
			Home
			<Button onClick={logout}>Log out</Button>
		</div>
	)
}

export default Home
