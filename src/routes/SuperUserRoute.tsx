import useAuthStore from '@/stores/auth'
import { UserRole } from '@/types'
import { Navigate, Outlet } from 'react-router-dom'

const SuperUserRoute = () => {
	const user = useAuthStore((state) => state.user)

	return user && user?.role === UserRole.SUPER_USER ? (
		<Outlet />
	) : (
		<Navigate to="/" replace />
	)
}

export default SuperUserRoute
