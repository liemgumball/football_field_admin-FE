import useAuthStore from '@/stores/auth'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
	const { user, remove: logout } = useAuthStore()
	const navigate = useNavigate()

	return user ? (
		<Button
			onClick={() => {
				logout()
				navigate('/login')
			}}
		>
			Log out
		</Button>
	) : null
}

export default LogoutButton
