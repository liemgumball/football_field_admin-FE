import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Layout from '@/components/Layout'
import { lazy } from 'react'
import { PATHS } from '@/constants/navigation'
import RouteError from './RouteError'
import Dashboard from '@/pages/Dashboard'

const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Home = lazy(() => import('@/pages/Home'))
const DayOfServices = lazy(() => import('@/pages/DayOfServices'))
const Bookings = lazy(() => import('@/pages/Bookings'))
const BookingDetails = lazy(() => import('@/pages/BookingDetails'))
const SubFieldDetails = lazy(() => import('@/pages/SubFieldDetails'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path={PATHS.LOGIN} element={<Login />} />
			<Route element={<PrivateRoute />}>
				<Route element={<Dashboard />} errorElement={<RouteError />}>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path={PATHS.DAY_OF_SERVICES} element={<DayOfServices />} />
					<Route path={PATHS.BOOKINGS}>
						<Route index element={<Bookings />} />
						<Route path={`:id`} element={<BookingDetails />} />
					</Route>
					<Route
						path={`${PATHS.SUBFIELDS}/:id`}
						element={<SubFieldDetails />}
					/>
				</Route>
			</Route>
			,
		</Route>,
	),
)

export default router
