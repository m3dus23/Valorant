import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../store/user.slice'
import styles from './LoginForm.module.scss'

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { isLoading, error } = useSelector(state => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = () => {
		let userCredentials = {
			email,
			password
		}
		dispatch(loginUser(userCredentials)).then(result => {
			if (result.payload) {
				setEmail('')
				setPassword('')
				navigate('/')
			}
		})
	}

	return (
		<div className={styles.login}>
			<h3 className='text-white mb-20 text-center text-4xl'>LOGIN</h3>
			<form onSubmit={handleSubmit(handleLogin)}>
				<label>
					Enter your e-mail:
					<input
						{...register('Email', {
							required: 'Введіть ваш e-mail',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Введіть дійсний e-mail'
							}
						})}
					/>
				</label>
				<div>{errors?.Email && <p>{errors?.Email?.message || 'Error'}</p>}</div>
				<label>
					Enter your password:
					<input
						type='password'
						{...register('Password', {
							required: 'Введіть ваш пароль',
							minLength: {
								value: 6,
								message: 'Пароль повинен бути мінімум 6 символів!'
							}
						})}
					/>
				</label>
				<div>
					{errors?.Password && <p>{errors?.Password?.message || 'Error'}</p>}
				</div>
				{/*<input type='submit' disabled={!isValid} value='Sign in' />*/}
				<button type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>
				{error && (
					<div className='text-white mt4' role='alert'>
						{error}
					</div>
				)}
			</form>
		</div>
	)
}
