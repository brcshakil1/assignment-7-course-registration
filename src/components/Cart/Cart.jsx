
import { PropTypes } from 'prop-types';
const Cart = ({courses}) => {
    
    return (
        <div className="">
           <ol className='list-decimal ml-4 py-4'>
            {
                courses.map((course, idx) => <li key={idx}>{course.course_name}</li>)
            }
           </ol>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array
}
export default Cart;