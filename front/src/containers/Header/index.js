import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header>
			<div style={containerStyle}>
				<Link style={styleLink} to="/users">
					Users
				</Link>
				<Link style={styleLink} to="/posts">
					Posts list
				</Link>
				<Link style={styleLink} to="/addarticle">
					Article add
				</Link>
				<Link style={styleLink} to="/profile">
					My profile
				</Link>
			</div>
		</header>
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
