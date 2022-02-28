import AddPostForm from "../../features/AddPostForm/AddPostForm";
import styles from './AddPost.module.scss';
import clsx from "clsx";

const AddPost = () => {
    return (
        <div className={clsx(styles.formWrapper, 'mt-4')}>
            <h2>AddPost</h2>
            <AddPostForm />
        </div>
        
    );
};

export default AddPost;