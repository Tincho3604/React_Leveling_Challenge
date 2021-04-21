import axios from "axios"
import { RUTA_API } from "../../Constants/constants"

const orderActions = {
    createPost: order => {
		return async (dispatch, getState) => {
			const response = await axios.post(`${RUTA_API}/posts`, order)
			console.log(response);
		}
	},

	getAllPosts: () => {
		return async (dispatch, getState) => {
			const response = await axios.get(`${RUTA_API}/posts`)
			const info = response.data.response
            console.log(info)
			dispatch({
				type: "GET_ALL_POSTS",
				payload: info
			})
		}
	},

    getPostById: (id) => {
		return async (dispatch, getState) => {
			const response = await axios.get(`${RUTA_API}/posts/${id}`)
			const info = response.data.response
            console.log(info)
			dispatch({
				type: "GET_POST_BY_ID",
				payload: info
			})
		}
	},

    editPost: (id) => {
		return async (dispatch, getState) => {
			const response = await axios.put(`${RUTA_API}/posts/${id}`)
			const info = response.data.response
			console.log(info)
            dispatch({
				type: "EDIT_POST",
				payload: id
			})
		}
	},

    deletePost: (id) => {
		return async (dispatch, getState) => {
			const response = await axios.delete(`${RUTA_API}/posts/${id}`)
			const info = response.data.response
			console.log(info)
		}
	}
}

export default orderActions;