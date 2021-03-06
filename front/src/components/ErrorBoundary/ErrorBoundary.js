import React from 'react'

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}
	static getDerivedStateFromError(error) {
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.log(error, info)
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		// eslint-disable-next-line
		return this.props.children
	}
}
