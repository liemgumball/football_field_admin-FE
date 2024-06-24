import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import Layout from '@/components/Layout'
import { lazy } from 'react'
import { PATHS } from '@/constants/navigation'
import AdminRoute from './AdminRoute'
import RouteError from './RouteError'
import Dashboard from '@/pages/Dashboard'
import SuperUserRoute from './SuperUserRoute'

const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Home = lazy(() => import('@/pages/Home'))
const DayOfServices = lazy(() => import('@/pages/DayOfServices'))
const Bookings = lazy(() => import('@/pages/Bookings'))
const BookingDetails = lazy(() => import('@/pages/BookingDetails'))
const SubFieldDetails = lazy(() => import('@/pages/SubFieldDetails'))
const Reviews = lazy(() => import('@/pages/Reviews'))
const Setting = lazy(() => import('@/pages/Setting'))
const FieldDetails = lazy(() => import('@/pages/FieldDetails'))
const FieldLocation = lazy(() => import('@/pages/FieldLocation'))
const Account = lazy(() => import('@/pages/Account'))
const SuperUserHome = lazy(() => import('@/pages/SuperUserHome'))
const Fields = lazy(() => import('@/pages/Fields'))
const FieldOverView = lazy(() => import('@/pages/FieldOverView'))

export const adminRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path={PATHS.LOGIN} element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route element={<AdminRoute />}>
				<Route element={<Dashboard />} errorElement={<RouteError />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path={PATHS.DAY_OF_SERVICES} element={<DayOfServices />} />
					<Route path={PATHS.BOOKINGS}>
						<Route index element={<Bookings />} />
						<Route path={`:id`} element={<BookingDetails />} />
					</Route>
					<Route
						path={`${PATHS.SUBFIELDS}/:id`}
						element={<SubFieldDetails />}
					/>
					<Route path={PATHS.REVIEWS} element={<Reviews />} />
					<Route path={PATHS.SETTINGS} element={<Setting />}>
						<Route index element={<FieldDetails />} />
						<Route path="location" element={<FieldLocation />} />
						<Route path="account" element={<Account />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Route>
			</Route>
		</Route>,
	),
)

export const superUserRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route element={<SuperUserRoute />}>
				<Route path="/" element={<SuperUserHome />}>
					<Route index element={<Fields />} />
					<Route path="*" element={<NotFound />} />
					<Route path="fields/:fieldId" element={<FieldOverView />} />
				</Route>
				<Route path="admin">
					<Route path="fields">
						<Route
							path=":fieldId"
							element={<Dashboard />}
							errorElement={<RouteError />}
						>
							<Route index element={<Home />} />
							<Route path="*" element={<NotFound />} />
							<Route path="day-of-services" element={<DayOfServices />} />
							<Route path="bookings">
								<Route index element={<Bookings />} />
								<Route path=":id" element={<BookingDetails />} />
							</Route>
							<Route path="subfields/:id" element={<SubFieldDetails />} />
							<Route path="reviews" element={<Reviews />} />
							<Route path="settings" element={<Setting />}>
								<Route index element={<FieldDetails />} />
								<Route path="location" element={<FieldLocation />} />
								<Route path="account" element={<Account />} />
								<Route path="*" element={<NotFound />} />
							</Route>
						</Route>
					</Route>
				</Route>
			</Route>
		</Route>,
	),
)
