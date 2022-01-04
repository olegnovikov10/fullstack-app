import logo from './logo.svg'
import './App.css'
import { UserPostContainer } from './containers/userPost/index'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<UserPostContainer
					firstName="Oleg"
					secondName="Novikov"
					date="14.08.2021"
					content="Hello! It's my new post"
				/>
			</header>
		</div>
	)
}

export default App
