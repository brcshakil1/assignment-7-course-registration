import Card from './../Card/Card';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({handleCoursesName}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <ToastContainer />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 mx-4'>
                {
                    courses.map(course => <Card 
                        key={course.id} 
                        course={course}
                        handleCoursesName={handleCoursesName}
                        />)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleCoursesName: PropTypes.func
}

export default Cards;