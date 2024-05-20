import useAuthStore from '@/stores/auth'
import { Button } from './ui/button'

const LogoutButton = () => {
	const { user, remove: logout } = useAuthStore()

	return user ? <Button onClick={logout}>Log out</Button> : null
}

export default LogoutButton
