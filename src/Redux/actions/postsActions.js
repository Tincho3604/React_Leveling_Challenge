import axios from "axios"
import { ROUTE_API } from "../../Constants/constants"

export const createPost = postInfo => {	
	    return async (dispatch, getState) => {
			await axios.post(`${ROUTE_API}/posts`, postInfo)
			dispatch({
				type: "SAVE_POST",
				payload: postInfo
			})
		}
	}

	
export const getAllPosts = () => {
		return async (dispatch, getState) => {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
			const info = response.data
			dispatch({
				type: "GET_ALL_POSTS",
				payload: info
			})
		}
	}

	export const getPostById = (id) => {
		return async (dispatch, getState) => {
			const response = await axios.get(`${ROUTE_API}/posts/${id}`)
			const info = response.data
            console.log(info)
			dispatch({
				type: "GET_POST_BY_ID",
				payload: info
			})
		}
	}

	export const editPost = (id) => {
		return async (dispatch, getState) => {
			const response = await axios.put(`${ROUTE_API}/posts/${id}`)
			const info = response.data
			console.log(info)
            dispatch({
				type: "EDIT_POST",
				payload: id
			})
		}
	}

    export const deletePost = (id) => {
		return async (dispatch, getState) => {
			const response = await axios.delete(`${ROUTE_API}/posts/${id}`)
			const info = response.data
			console.log(info)
		}
	}

