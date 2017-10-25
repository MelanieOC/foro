import store from "./store";

export const addComment= (name,comment)=>{
    const comments = [...store.getState().comments]
    const newComment= comments.concat( {
		name: name,
		comment: comment
	});

	store.setState({
		comments: newComment
	})
}

export const removeComment = (index) => {
	const comments =  store.getState().comments.filter( (item, idx) => idx != index );
	store.setState({
		comments: comments
	})
}
