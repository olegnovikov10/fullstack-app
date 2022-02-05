import {apiClient} from '../../../config/axios'

export const getUser =  async (id) =>{
	return apiClient.get(`/user/${id}`)
}

export const updateUser =  async (data , id) =>{
	return apiClient.put(`/user/${id}`,data)
}