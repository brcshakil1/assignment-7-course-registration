import Card from './../Card/Card';
import { useState, useEffect } from 'react';

const Cards = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {
                    courses.map(course => <Card key={course.id} course={course}/>)
                }
            </div>
        </div>
    );
};

export default Cards;