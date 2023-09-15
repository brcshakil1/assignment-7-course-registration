import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from 'react-icons/go';
const Card = ({course, handleCoursesName}) => {
    const {id, course_name, details, credit, price, img} = course;
    return (
        <div className="w-full lg:w-[280px] bg-white p-4 rounded-lg">
            <img src={img} alt="" className="w-full rounded-md"/>
            <h2 className=' font-semibold pt-4 pb-2'>{course_name}</h2>
            <p className='text-sm'>{details}</p>
            <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center pt-4 pb-7'>
                <div className='flex gap-2 items-center pb-2 md:pb-0'>
                    <FiDollarSign className='text-2xl'/>    
                    <p>Price: {price}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoBook className='text-2xl'/>
                    <p>Credit: {credit}hr</p>
                </div>
            </div>
            <button 
            className='w-full bg-[#2F80ED] text-white text-[18px] py-2.5 rounded-md'
            onClick={() => handleCoursesName(id,course, credit, price)}
            >Select</button>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object,
    handleCoursesName: PropTypes.func
}

export default Card
