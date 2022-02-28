import { Button } from "react-bootstrap";
import AllPosts from "../../features/AllPosts/AllPosts";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
                <h2>All posts</h2>
                <Button as={Link} to='/post/add' variant='outline-info mb-3 px-3 py-2'>Add post</Button>
            </div>
            <AllPosts />
        </div>
    );
};

export default Home;