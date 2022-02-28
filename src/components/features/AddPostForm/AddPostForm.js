import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsReducer';
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = payload => {
        dispatch(addPost(payload));
        navigate('../');
    };

    return <PostForm action={handleSubmit} actionText='Add post' />       
};

export default AddPostForm;