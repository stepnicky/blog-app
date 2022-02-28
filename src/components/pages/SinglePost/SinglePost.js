import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsReducer';
import { useParams } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SinglePost.module.scss';
import clsx from 'clsx';


const SinglePost = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    return (
        <article>
            <Row className="d-flex justify-content-between mb-3">
                <Col xs={6} className='d-flex justify-content-center'>
                    <h2>{postData.title}</h2>
                </Col>
                <Col xs={6} className="d-flex align-items-start justify-content-center">
                    <Button as={Link} to={`/post/edit/${postData.id}`} className='mx-2' variant="outline-info">
                        Edit
                    </Button>
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </Col>
            </Row>
            <div className={styles.postInfo}>
            <p className='mb-0'><span className={styles.bold}>Author: </span>{postData.author}</p>
            <p className=""><span className={styles.bold}>Published: </span>{postData.publishedDate}</p>
                <p>{postData.content}</p>
            </div>
        </article>
    );
};

export default SinglePost;