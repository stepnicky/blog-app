// eslint-disable-next-line
import { useState, dangerouslySetInnerHTML } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsReducer';
import { removePost } from '../../../redux/postsReducer';
import { useParams } from 'react-router';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import styles from './SinglePost.module.scss';
import dateToStr from '../../../utils/dateToStr';

const SinglePost = props => {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    

    const dispatch = useDispatch();
    const remove = () => dispatch(removePost(id));

    if(!postData) {
        return <Navigate to="/" />
    } 

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
                    <Button variant="outline-danger" onClick={handleShow}>
                        Delete
                    </Button>
                </Col>
            </Row>
            <div className={styles.postInfo}>
                <p className='mb-0'><span className={styles.bold}>Author: </span>{postData.author}</p>
                <p className='mb-0'><span className={styles.bold}>Published: </span>{dateToStr(postData.publishedDate)}</p>
                <p><span className={styles.bold}>Category: </span>{postData.category.charAt(0).toUpperCase() + postData.category.slice(1)}</p>
                <p dangerouslySetInnerHTML={{__html: postData.content}} />
                    
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The operation will completely remove this post from the app.
                    Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={() => {handleClose() ; remove()}}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </article>
    );
};

export default SinglePost;