import axios from "axios"
import { ROUTE_API } from "../../Constants/constants"

export const createPost = postInfo => {	
	    return async (dispatch, getState) => {
			const response = await axios.post(`${ROUTE_API}/posts`)
			const info = response.data
			console.log(info)
			dispatch({
				type: "SAVE_POST",
				payload: postInfo
			})
		}
	}

	
export const getAllPosts = () => {
		return async (dispatch, getState) => {
			try{	
				const response = await axios.get(`${ROUTE_API}/posts`, {
					'mode': 'cors',
					'headers': {
						'Access-Control-Allow-Origin': '*',
					}
	        })
			dispatch({
				type: "GET_ALL_POSTS",
				payload: response.data
			})
		}
			catch(e){
                console.log(e)
			}
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
			const response = await axios.put(`${ROUTE_API}/posts/${id}`)
			const info = response.data
			console.log(info)
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
			dispatch({
				type: "DELETE_POST",
				payload: id
			})
		}
	}

