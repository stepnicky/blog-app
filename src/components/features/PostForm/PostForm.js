import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = props => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [date, setDate] = useState(props.date || '');
    const [description, setDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');

    const payload = {
        title: title,
        author: author,
        publishedDate: date,
        shortDescription: description,
        content: content,
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.action(payload);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-4" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    className={styles.formControl} size='lg' 
                    placeholder="Enter title" 
                    value={title} onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    className={styles.formControl} size='lg' 
                    placeholder="Enter author" 
                    value={author} onChange={e => setAuthor(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Published</Form.Label>
                <Form.Control 
                    className={styles.formControl} size='lg' 
                    placeholder="Enter date" 
                    value={date} onChange={e => setDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control 
                    className={styles.textarea} size='lg' 
                    as="textarea" rows={3} placeholder="Leave a comment here"
                    value={description} onChange={e => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Main content</Form.Label>
                <Form.Control 
                    className={styles.textarea} size='lg' 
                    as="textarea" rows={9} placeholder="Leave a comment here"
                    value={content} onChange={e => setContent(e.target.value)}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>{props.actionText}</Button>
        </Form>
    );
};

export default PostForm;