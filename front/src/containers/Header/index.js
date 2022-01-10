const Header = ({ getPageNameHandle }) => {
	const articles = 'Articles'
	const addArticle = 'AddArticle'
	const profile = 'Profile'

	return (
		<div>
			<button onClick={getPageNameHandle.bind(null, articles)}>
				перейти на статьи
			</button>
			<button onClick={getPageNameHandle.bind(null, addArticle)}>
				добавить статьи
			</button>
			<button onClick={getPageNameHandle.bind(null, profile)}>
				Профайл
			</button>
		</div>
	)
}

export default Header
