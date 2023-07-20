import { Link } from 'react-router-dom'
import avatar from '../img/header/avatar.png'
import '../ui/LoginButton.scss'
import '../ui/LogoutButton.scss'

// function getUser() {
// 	let user = localStorage.getItem('user')
//
// 	if (user) {
// 		try {
// 			user = JSON.parse(user)
// 		} catch (error) {
// 			console.error('Error parsing user data:', error)
// 			user = null
// 		}
// 	} else {
// 		user = null
// 	}
//
// 	return user
// }

/*function getUser() {
	let user = localStorage.getItem('user')
	if (user) {
		user = JSON.parse(user)
	} else {
		user = null
	}
	return user
}*/

const Auth = () => {
	// const [user, setUser] = useState(getUser())
	//
	// const handleLogout = () => {
	// 	localStorage.removeItem('user')
	// 	setUser(null)
	// }

	return (
		<div className='flex items-center gap-5'>
			<div className='flex gap-2 items-center'>
				<div>
					<img src={avatar} alt='avatar' />
				</div>
				<h2>Hello, </h2>
				<button className='logoutButton'>Logout</button>
			</div>
			<Link to='/login'>
				<button className='loginButton'>
					<span>Login</span>
				</button>
			</Link>
		</div>
	)
}

export default Auth
