import { useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux'; 
import { getPostByCategory } from '../../../redux/postsReducer';
import { Col, Row, Card, Button } from 'react-bootstrap';
import styles from './SingleCategory.module.scss';
import dateToStr from '../../../utils/dateToStr';
import capitalize from "../../../utils/capitalize";


const SingleCategory = () => {

    const { category } = useParams();
    const posts = useSelector(state => getPostByCategory(state, category));

    return (
        <div>
            <h2 className='mb-4'>Category: {capitalize(category)}</h2>
            <Row xs={1} md={2} lg={3} className='g-4'>
            {posts.map(post => 
                <Col key={post.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text className='mb-0 mt-3'><span className={styles.bold}>Author: </span>{post.author}</Card.Text>
                            <Card.Text className='mb-0'><span className={styles.bold}>Published: </span>{dateToStr(post.publishedDate)}</Card.Text>
                            <Card.Text><span className={styles.bold}>Category: </span>{capitalize(post.category)}</Card.Text>
                            <Card.Text>{post.shortDescription}</Card.Text>
                            <Button as={Link} to={`/post/${post.id}`}>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
            </Row>
        </div>
    );
};

export default SingleCategory;