import useAuthStore from '@/stores/auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	const user = useAuthStore((state) => state.user)

	return user ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
