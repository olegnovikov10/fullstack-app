import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { QueryClient,QueryClientProvider }  from 'react-query';
const  queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
		<ErrorBoundary>
			<BrowserRouter>
					<App />
			</BrowserRouter>
		</ErrorBoundary>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
