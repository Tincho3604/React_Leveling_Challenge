
const initialState = {
	posts:[]
}

function BlogReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_POSTS":	
			return {
				...state,
				posts: action.payload,
			}

        case "GET_POST_BY_ID":	
			return {
				...state,
				posts: action.payload,
			}

        case "EDIT_POST":	
                let newArray = [...state.posts]
                for(let i=0; i<newArray.length; i++){
                    if(newArray[i].id === action.payload){
                        newArray[i] = action.payload
                    }
                }
                return {
                ...state,
                posts: newArray
			}

        case "DELETE_POST":	
			return {
				...state,
				posts: state.posts.filter(idPost => idPost.id !== action.payload)
			}

		default:
			return state
	}
}

export default BlogReducer;