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

export const addAvatar = async (data, id) => {
	return apiClient.post(`/post/${id}/avatar`, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};


