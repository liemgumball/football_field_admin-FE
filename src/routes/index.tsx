import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import Layout from '@/components/Layout'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<Home />} />
			</Route>
			,
		</Route>,
	),
)

export default router
