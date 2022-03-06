import styles from './Categories.module.scss';
import AllCategories from '../../features/AllCategories/AllCategories';

const Categories = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className='mb-5'>All categories</h2>
            < AllCategories />
        </div>
        
    );
}

export default Categories;