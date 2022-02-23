import { Link, Outlet } from 'react-router-dom'
import { Header } from '../../containers/Header'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'


export const Layout = () => {
	const [auth, setAuth] = useState({})
	useEffect(() => {
		const localStorageAuth = localStorage.getItem('auth')
		if (localStorageAuth) {
			setAuth(JSON.parse(localStorageAuth))
		}
	})
	const handleFacebookAuth = useCallback((data) => {
		console.log(data)
		axios
			.post('http://localhost:3002/api/auth/facebook', {
				access_token: data.accessToken,
			})
			.then(function (response) {
				setAuth({
					accessToken: response.data.accessToken,
					refreshToken: response.data.refreshToken,
					user: parseJwt(response.data.accessToken),
				})
			})
	})

	const handleGoogleAuth = useCallback((data) => {
		console.log(data)
		axios
			.post('http://localhost:3002/api/auth/google', {
				access_token: data.accessToken,
			})
			.then(function (response) {
				setAuth({
					accessToken: response.data.accessToken,
					refreshToken: response.data.refreshToken,
					user: parseJwt(response.data.accessToken),
				})
			})
	})

	return (
		<div>
			<Header />
			<GoogleLogin
				clientId="775905327206-6ebcobbajsph75u5e01l6krt1s0vb9qq.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={handleGoogleAuth}
				cookiePolicy={'single_host_origin'}
			/>
			<FacebookLogin
				appId="636895277419796"
				autoLoad={true}
				fields="name,email,picture"
				onClick={handleFacebookAuth}
				callback={handleFacebookAuth}
				/>

			{auth && (
				<>
					<div>{auth?.user?.id}</div>
					<div>{auth?.user?.name}</div>
				</>
			)}

			<Outlet />
		</div>
	)
}

const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split('.')[1]))
	} catch (e) {
		return null
	}
}
