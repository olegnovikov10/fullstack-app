import {apiClient} from '../../../config/axios'


export const getPosts  = async () =>{
		return apiClient.get('/post')
}

export const AddPost = async (data) =>{
	return apiClient.post('/post',data)
}

export const updatePost = async (id , data) =>{
	return apiClient.put(`/post/${id}`, data)
}