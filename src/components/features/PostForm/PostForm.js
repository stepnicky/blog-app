import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

const PostForm = props => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [date, setDate] = useState(props.date || new Date());
    const [description, setDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const payload = {
        title: title,
        author: author,
        publishedDate: date,
        category: category,
        shortDescription: description,
        content: content,
    }

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!date);
        if (content && date) {
            props.action(payload);  
        } 
    }

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3 mt-4" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    {...register("title", { required: true, minLength: 3 })}
                    className={styles.formControl} size='lg' 
                    placeholder="Enter title" 
                    value={title} onChange={e => setTitle(e.target.value)}
                />
                {errors.title && <small className="d-block form-text text-danger mt-1">
                    This field is too short (min is 3)
                </small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    {...register("author", { required: true, minLength: 3 })}
                    className={styles.formControl} size='lg' 
                    placeholder="Enter author" 
                    value={author} onChange={e => setAuthor(e.target.value)}
                />
                {errors.author && <small className="d-block form-text text-danger mt-1">
                    This field is too short (min is 3)
                </small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Published</Form.Label>
                <Form.Control 
                    as={DatePicker} className={styles.formControl} 
                    size='lg' placeholder="Enter date" 
                    selected={date} onChange={newDate => setDate(newDate)}
                />
                {dateError && <small className="d-block form-text text-danger mt-1">
                    This field is required
                </small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Category</Form.Label>
                <Form.Select 
                    defaultValue={category} onChange={e => setCategory(e.target.value)}
                    className={styles.formControl} size='lg'
                >
                    <option>Select category...</option>
                    <option value="sport">Sport</option>
                    <option value="news">News</option>
                    <option value="movies">Movies</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control 
                    {...register("description", { required: true, minLength: 20 })}
                    className={styles.textarea} size='lg' 
                    as="textarea" rows={3} placeholder="Leave a comment here"
                    value={description} onChange={e => setDescription(e.target.value)}
                />
                {errors.description && <small className="d-block form-text text-danger mt-1">
                    This field is too short (min is 20)
                </small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Main content</Form.Label>
                <Form.Control 
                    className={styles.textarea} size='lg' theme='snow'
                    as={ReactQuill} rows={9} placeholder="Leave a comment here"
                    defaultValue={content} onChange={setContent}
                />
                {contentError && <small className="d-block form-text text-danger mt-1">
                    This field is required
                </small>}
            </Form.Group>
            <Button variant='primary' type='submit'>{props.actionText}</Button>
        </Form>
    );
};

export default PostForm;