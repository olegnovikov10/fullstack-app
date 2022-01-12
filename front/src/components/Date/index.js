import { useParams } from 'react-router-dom'

export const Dates = () => {
	const params = useParams()

	const checkRoute = params.date.match(
		'^([0-9][0-9])?[0-9][0-9]-(0[0-9]||1[0-1])-([0-2][0-9]||3[0-1])$',
	)

	let dateRoute;
	let currentData;
	if(checkRoute){
		const dateArr = params.date.split('-')
		const year = dateArr[0]
		const mm = dateArr[1]
		const day = dateArr[2]
		dateRoute = new Date(year, mm, day)
		currentData = new Date()
	}

	if (currentData > dateRoute) {
		return <div>Components with date</div>
	}
	return <div>404</div>
}
