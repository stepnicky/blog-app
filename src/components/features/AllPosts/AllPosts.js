import { Row, Card, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from 'react-router-dom';
import styles from './AllPosts.module.scss';
import dateToStr from '../../../utils/dateToStr';

const AllPosts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <Row xs={1} md={2} lg={3} className='g-4'>
            {posts.map(post => 
                <Col key={post.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text className='mb-0 mt-3'><span className={styles.bold}>Author: </span>{post.author}</Card.Text>
                            <Card.Text className='mb-0'><span className={styles.bold}>Published: </span>{dateToStr(post.publishedDate)}</Card.Text>
                            <Card.Text><span className={styles.bold}>Category: </span>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</Card.Text>
                            <Card.Text>{post.shortDescription}</Card.Text>
                            <Button as={Link} to={`/post/${post.id}`}>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
};

export default AllPosts;