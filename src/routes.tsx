import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from 'Views'

const Routes: FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/detail/:slug">
					{/* <Detail /> */}
				</Route>
				<Route path="*">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
