import { Button } from '@/components/ui/button'
import { Link, useRouteError } from 'react-router-dom'

const RouteError = () => {
	const error = useRouteError()
	const message = error instanceof Error ? error.message : 'An error occurred'

	return (
		<>
			<p className="container my-4 text-center text-xl text-muted-foreground">
				{message}
			</p>
			<Button asChild>
				<Link to="">Back to dashboard</Link>
			</Button>
		</>
	)
}

export default RouteError
