import { FC, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from 'Views'
import { ProtectedRoute, SignIn } from 'Components'
import { AuthContext } from 'Context/auth.context'

const Routes: FC = () => {
	const { user, loading } = useContext(AuthContext)
	console.log(loading, user)
	// TODO* Create interface
	const defaultProtectedRouteProps = {
		isLoading: loading,
		isAuthenticated: Boolean(user),
		authenticationPath: '/sign-in',
	}

	return (
		<Router>
			<Switch>
				<Route exact path="/sign-in" component={SignIn} />
				<ProtectedRoute {...defaultProtectedRouteProps} exact path="/" component={Home} />
				<ProtectedRoute {...defaultProtectedRouteProps} path="*" component={Home} />
			</Switch>
		</Router>
	)
}

export default Routes
