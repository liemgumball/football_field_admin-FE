import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { adminRouter, superUserRouter } from '@/routes'
import ErrorBoundary from './components/ErrorBoundary'
import useAuthStore from './stores/auth'
import { UserRole } from './types'

const client = new QueryClient()

function App() {
	const user = useAuthStore((state) => state.user)

	return (
		<ErrorBoundary>
			<QueryClientProvider client={client}>
				{user?.role === UserRole.SUPER_USER ? (
					<RouterProvider router={superUserRouter} />
				) : (
					<RouterProvider router={adminRouter} />
				)}
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App
