import {apiClient} from '../../../config/axios'


export const getUser =  async (id) =>{
	return apiClient.get(`/user/${id}`)
}