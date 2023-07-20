import { HashRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/Login/LoginPage'

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</HashRouter>
	)
}

export default Router
