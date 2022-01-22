import { Container , Spinner } from 'react-bootstrap';

const Loading = () => {
	return (
		<Container style={{textAlign : 'center'}}>
		<Spinner animation="border" variant="success" />
		</Container>
	)
}

export default Loading