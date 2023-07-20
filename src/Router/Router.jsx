import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/Login/LoginPage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<LoginPage />} path='/login' />
				{/* <Route element={<div>Not Found</div>} path='*' /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default Router
