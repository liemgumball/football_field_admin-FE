import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Layout from '@/components/Layout'

import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route element={<Dashboard />}>
					<Route index element={<Home />} />
				</Route>
			</Route>
			,
		</Route>,
	),
)

export default router
