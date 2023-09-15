import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({courses}) => {
    
    return (
        <div>
            <ToastContainer />
           <ol className='list-decimal ml-4 pb-4'>
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