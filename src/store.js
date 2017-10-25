import createStore from "redux-zero";

const comments = [
    {
        name: 'Lucía',
        comment: 'Excellent stuff'
    },
    {
        name: 'Peter',
        comment: 'This is awful!!'
    }
]

const initialState = {
	comments : comments
};

const store = createStore(initialState);

export default store;
