import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from 'core'
import reportWebVitals from 'core/reportWebVitals'
import { GlobalStyles, StyledLayout, theme } from 'Styles'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { AuthProvider } from 'Context'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AuthProvider>
				<StyledLayout>
					<Routes />
				</StyledLayout>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
