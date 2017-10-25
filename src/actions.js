import store from "./store";

export const addComment= (name,comment)=>{
    const newComment = [...store.getState().comments,   {
		name: name,
		comment: comment
	}];

	store.setState({
		comments: newComment
	})
}