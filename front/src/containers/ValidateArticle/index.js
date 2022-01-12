import { useParams } from 'react-router-dom'

export const ValidateArticle = () => {
	let params = useParams()
	let checkNumber = params.id.match(/^\d+$/)

	let checkWordsUp = params.id.match(/^[A-Z]+$/)

	const extList = ['jpeg','doc','pdf'];

	function checkRouteOnFilePath(params) {
		try{
			let arr = params.split('.');
			const fileName = arr[0].match(/^\w+$/);
			const extRes = extList.includes(arr[1])
			if(fileName && extRes){
				return true
			}
		}
		catch(e){
			console.log(e)
			return false
		}
	}

	if(checkNumber){
		return <div> Our Component</div>
	}

	if(checkWordsUp){
		return <div> Our Component with ONLY UP WORDS</div>
	}

	if(checkRouteOnFilePath(params.id)) {
		return <div> Our Component filename</div>
	}



	return(
		<>404</>
	)
}
