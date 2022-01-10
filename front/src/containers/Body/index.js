import AddArticle from '../../components/AddArticle'
import Articles from '../../components/Articles'
import Profile from '../../components/Profile'

const Body = ({ pageName }) => {
	const articles = 'Articles'
	const addArticle = 'AddArticle'
	const profile = 'Profile'


	if(pageName === articles){
		return <div>{<Articles/>}</div>
	}

	if(pageName === addArticle){
		return <div>{<AddArticle/>}</div>
	}

	if(pageName === profile){
		return <div>{<Profile/>}</div>
	}
	else{
		return <div>start</div>
	}



}

export default Body
