import { Routes ,Route} from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ValidateArticle } from './containers/ValidateArticle'
import { Dates } from './components/Date'
import Articles from './components/Articles'
import AddArticle from './components/AddArticle'
import Profile from './components/Profile'

import './App.css'

function App() {
	return (
	<>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="date/:date"  element={<Dates />} />
				<Route path="articles"  element={<Articles />} />
				<Route path="articles/:id" element={<ValidateArticle />} />
				<Route path="addarticle"  element={<AddArticle />} />
				<Route path="profile"  element={<Profile />} />
				<Route path="*" element={<div>404 error</div>} />
			</Route>
		</Routes>
	</>
	)
}

export default App
