import { Link, Outlet } from 'react-router-dom'
import { Header } from '../../containers/Header'

export const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}


