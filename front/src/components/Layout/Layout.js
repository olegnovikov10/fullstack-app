import { Link, Outlet } from 'react-router-dom'
import { Header } from '../../containers/Header'

export const Layout = () => {
	return (
		<div>
			<Header>
				<div style={containerStyle}>
					<Link style={styleLink} to="/articles">
						Articles list
					</Link>
					<Link style={styleLink} to="/addarticle">
						Article add
					</Link>
					<Link style={styleLink} to="/profile">
						My profile
					</Link>
				</div>
			</Header>
			<Outlet />
		</div>
	)
}

const containerStyle = {
	textAlign: 'center',
}
const styleLink = {
	color: 'blue',
	display: 'inline-block',
	margin: '0 10px',
	textDecoration: 'none',
}
