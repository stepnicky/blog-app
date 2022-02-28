import { Row, Card, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from 'react-router-dom';
import styles from './AllPosts.module.scss';

const AllPosts = () => {

    const cards = useSelector(getAllPosts);

    return (
        <Row xs={1} md={2} lg={3} className='g-4'>
            {cards.map(card => 
                <Col key={card.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <span className={styles.bold}>Author: </span>{card.author}
                            <Card.Text><span className={styles.bold}>Published: </span>{card.publishedDate}</Card.Text>
                            <Card.Text>{card.shortDescription}</Card.Text>
                            <Button as={Link} to={`/post/${card.id}`}>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
};

export default AllPosts;