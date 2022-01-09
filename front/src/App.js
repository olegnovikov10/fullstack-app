import { useState } from 'react'

import './App.css'
import Header from './containers/Header'
import Body from './containers/Body'


function App() {
	const [pageName,setPageName] = useState()
	function getPageNameHandle (pageName){
		setPageName(pageName)
	}

	return (
		<div>
			<Header getPageNameHandle={getPageNameHandle} />
			<Body pageName={pageName} />
		</div>
	)
}

export default App
