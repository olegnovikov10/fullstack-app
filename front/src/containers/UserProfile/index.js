import { getUser } from './api/crud'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Profile from '../../components/UserProfile'
import Loading from '../../components/Loading'
import { useState } from 'react'
import authContext from '../../authContext'

const UserProfileContainer = () => {
	const { id } = useParams()

	const { isFetching, data } = useQuery('userProfile',  () =>
		 getUser(id),
	)

	const userProfile =  data?.data || {}

	const [isLog , setUserData] = useState({ isLogin : false  })


	const [isOpenForm, setIsOpenForm] = useState()

	const handleIsOpenForm = () => {
		setIsOpenForm(!isOpenForm)
	}

	return (
		<>
			{isFetching && <Loading />}
			<authContext.Provider value={{...isLog , ...userProfile}  }>
			<Profile
				handleIsOpenForm={handleIsOpenForm}
				userProfile={userProfile}
				isOpenForm={isOpenForm}
			/>
			</authContext.Provider>
		</>
	)
}

export default UserProfileContainer
