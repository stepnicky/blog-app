import shortid from "shortid";

// selectors

export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);
export const getPostByCategory = ({ posts }, postCategory) => posts.filter(post => post.category === postCategory);

// actions

const createActionName = actionName => `app/posts/${actionName}`;

// action creators

export const removePost = payload => ({ type: createActionName('REMOVE_POST'), payload });
export const addPost = payload => ({ type: createActionName('ADD_POST'), payload });
export const editPost = payload => ({ type: createActionName('EDIT_POST'), payload });

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case createActionName('REMOVE_POST'):
            return statePart.filter(post => post.id !== action.payload);
        case createActionName('ADD_POST'):
            return [ ...statePart, { ...action.payload, id: shortid() } ];
        case createActionName('EDIT_POST'):
            return statePart.map(post => (post.id === action.payload.id) ? {...post, ...action.payload} : post);
        default:
            return statePart;
    };
};

export default postsReducer;