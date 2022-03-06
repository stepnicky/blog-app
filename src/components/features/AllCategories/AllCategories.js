import { useSelector } from "react-redux";
import capitalize from '../../../utils/capitalize';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesReducer';

const AllCategories = () => {

    const categories = useSelector(getAllCategories);
    console.log(categories);
    return (
        <div>
            {categories.map(category => 
                <Card key={category}>
                    <Card.Title className='m-3 mb-4'>
                        <Link to={`/category/${category}`}>
                            {capitalize(category)}
                        </Link>
                    </Card.Title>
                </Card>
            )}
        </div>
    );
}

export default AllCategories;


