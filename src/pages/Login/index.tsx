import LoginForm from './components/LoginForm'

const Login = () => (
	<main className="container flex w-full max-w-max items-center justify-center py-4">
		<div className="my-16 rounded-lg border p-8">
			<h2 className="text-center text-3xl font-bold lg:text-4xl">Login</h2>
			<LoginForm />
		</div>
	</main>
)

export default Login
