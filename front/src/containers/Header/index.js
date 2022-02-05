import { Link } from 'react-router-dom'
import {Container} from '@mui/material'

export const Header = () => {
	return (
		<Container maxWidth="sm" >
				<div style={containerStyle}>
					<Link style={styleLink} to="/users">
						Users
					</Link>
					<Link style={styleLink} to="/posts">
						Posts list
					</Link>
				</div>
		</Container>
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
