
import { PropTypes } from 'prop-types';
const Cart = ({courses}) => {
    
    return (
        <div className="pb-4">
           <ol>
            {
                courses.map((course, idx) => <li key={idx}>{course.course_name}</li>)
            }
           </ol>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array,
}
export default Cart;