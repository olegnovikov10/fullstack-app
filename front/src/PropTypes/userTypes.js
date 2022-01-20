import PropTypes from 'prop-types'

const userTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.string.isRequired,
		avatar: PropTypes.shape({
			file: PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				path: PropTypes.string,
			}),
		}),
		files: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				path: PropTypes.string,
			}),
		),
		addrr: PropTypes.shape({
			main: PropTypes.shape({
				line1: PropTypes.string,
				line2: PropTypes.string,
				city: PropTypes.string,
				zip: PropTypes.number,
			}),
			alt: PropTypes.shape({
				line1: PropTypes.string,
				line2: PropTypes.string,
				city: PropTypes.string,
				zip: PropTypes.number,
			}),
		}),
		friends: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				age: PropTypes.string.isRequired,
				avatar: PropTypes.shape({
					file: PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						path: PropTypes.string,
					}),
				}),
				files: PropTypes.arrayOf(
					PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						path: PropTypes.string,
					}),
				),
				addrr: PropTypes.shape({
					main: PropTypes.shape({
						line1: PropTypes.string,
						line2: PropTypes.string,
						city: PropTypes.string,
						zip: PropTypes.number,
					}),
					alt: PropTypes.shape({
						line1: PropTypes.string,
						line2: PropTypes.string,
						city: PropTypes.string,
						zip: PropTypes.number,
					}),
				}),
			}),
		),
	}),
}

export default userTypes
