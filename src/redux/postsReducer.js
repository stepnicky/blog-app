
// selectors

export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions

const createActionName = actionName => `app/posts/${actionName}`;

// action creators

export const removePost = payload => ({ type: createActionName('REMOVE_POST'), payload });

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case createActionName('REMOVE_POST'):
            return statePart.filter(post => post.id !== action.payload);
        default:
            return statePart;
    };
};

export default postsReducer;