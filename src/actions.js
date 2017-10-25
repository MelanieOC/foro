import store from "./store";

export const addComment= (name,comment)=>{
    const comments = [...store.getState().comments,   {
		name: name,
		comment: comment
	}];

	store.setState({
		comments: comments
	})
}

export const removeComment = (index) => {
	const comments =  store.getState().comments.filter( (item, idx) => idx != index );

	store.setState({
		comments: comments
	})
}
