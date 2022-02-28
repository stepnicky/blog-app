import EditPostForm from '../../features/EditPostForm/EditPostForm';
import styles from './EditPost.module.scss';
import clsx from "clsx";


const EditPost = () => {
    return (
        <div className={clsx(styles.formWrapper, 'mt-4')}>
            <h2>EditPost</h2>
            <EditPostForm />
        </div>
    );
};

export default EditPost;