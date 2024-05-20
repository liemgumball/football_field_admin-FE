import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Layout from '@/components/Layout'
import { lazy } from 'react'

const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Home = lazy(() => import('@/pages/Home'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route element={<Dashboard />}>
					<Route path="*" element={<NotFound />} />
					<Route index element={<Home />} />
				</Route>
			</Route>
			,
		</Route>,
	),
)

export default router
