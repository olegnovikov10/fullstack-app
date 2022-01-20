import { Routes, Route } from 'react-router-dom'
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
					<Route path="date/:date" element={<Dates />} />
					<Route path="articles" element={<Articles />} />
					<Route path="articles/:id" element={<ValidateArticle />} />
					<Route path="addarticle" element={<AddArticle />} />
					<Route
						path="profile"
						element={
							<Profile
								name="oleg"
								age={29}
								alias="alias-profile"
								user={{
									name: 'test',
									age: '23',
									avatar: {
										file: {
											id: 1,
											name: '123.jpg',
											path: '/files/1.jpg',
										},
									},
									files: [
										{
											id: 1,
											name: '123.jpg',
											path: '/files/1.jpg',
										},
										{
											id: 1,
											name: '123.jpg',
											path: '/files/1.jpg',
										},
									],
									addrr: {
										main: {
											line1: 'test',
											line2: 'test',
											city: 'test',
											zip: 1234,
										},
										alt: {
											line1: 'test',
											line2: 'test',
											city: 'test',
											zip: 1234,
										},
									},
									friends: [
										{
											name: 'test',
											age: '23',
											avatar: {
												file: {
													id: 1,
													name: '123.jpg',
													path: '/files/1.jpg',
												},
											},
											files: [
												{
													id: 1,
													name: '123.jpg',
													path: '/files/1.jpg',
												},
												{
													id: 1,
													name: '123.jpg',
													path: '/files/1.jpg',
												},
											],
											addrr: {
												main: {
													line1: 'test',
													line2: 'test',
													city: 'test',
													zip: 1234,
												},
												alt: {
													line1: 'test',
													line2: 'test',
													city: 'test',
													zip: 1234,
												},
											},
										},
									],
								}}
							/>
						}
					/>
					<Route path="*" element={<div>404 error</div>} />
				</Route>
			</Routes>
		</>
	)
}

export default App
