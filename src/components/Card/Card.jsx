import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Card = ({course, handleCoursesName}) => {
    const {id, course_name, details, credit, price, img} = course;
    return (
        <div className="w-[280px] h-[410px] mb-12">
            <img src={img} alt="" className="w-full rounded-md"/>
            <h2 className=' font-semibold pt-4 pb-2'>{course_name}</h2>
            <p className='text-sm'>{details}</p>
            <div className='flex justify-between items-center pt-4 pb-7'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon className='text-2xl' icon={faDollarSign} />
                    <p>Price: {price}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon className='text-2xl' icon={faBookOpen} /> 
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
