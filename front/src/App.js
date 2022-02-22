import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Dates } from './components/Date'
import Posts from './containers/Posts/index'
import UserProfileContainer from './containers/UserProfile'
import UsersContainer from './containers/Users'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="date/:date" element={<Dates />} />
					<Route path="users" element={<UsersContainer />} />
					<Route
						path="users/:id"
						element={<UserProfileContainer />}
					/>
					<Route path="posts" element={<Posts />} />
					<Route path="*" element={<div>404 error</div>} />
				</Route>
			</Routes>
		</>
	)
}

export default App
