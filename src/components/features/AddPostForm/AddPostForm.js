import styles from './AddPostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsReducer';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const payload = {
        title: title,
        author: author,
        publishedDate: date,
        shortDescription: description,
        content: content,
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(payload);
        dispatch(addPost(payload));
        setTitle('');
        setAuthor('');
        setDate('');
        setDescription('');
        setContent('');
        navigate('../');
    };

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
            <Button variant='primary' type='submit'>Add post</Button>
        </Form>
    );
};

export default AddPostForm;