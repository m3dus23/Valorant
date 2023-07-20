import { HashRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/Login/LoginPage'

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<LoginPage />} path='/login' />
			</Routes>
		</HashRouter>
	)
}

export default Router
