import axios from "axios"
import { ROUTE_API } from "../../Constants/constants"

export const createPost = postInfo => {	
	    return async (dispatch, getState) => {
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

	export const editPost = (value, id) => {
		return async (dispatch, getState) => {
            dispatch({
				type: "EDIT_POST",
				payload: value
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

