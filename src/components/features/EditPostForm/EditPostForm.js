import { useDispatch, useSelector } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsReducer';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    if (!postData) {
        return <Navigate to='/' />
    }

    const handleSubmit = payload => {
        dispatch(editPost({...payload, id: id}));
        navigate('../');
    };

    return (
        <PostForm 
            action={handleSubmit} title={postData.title}
            author={postData.author} description={postData.shortDescription}
            date={postData.publishedDate} content={postData.content} actionText='Edit post'
         />  
    );     
};

export default EditPostForm;