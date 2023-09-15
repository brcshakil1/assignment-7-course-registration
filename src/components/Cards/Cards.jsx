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
        <div className='md:w-2/3'>
            <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
            <Card />
        </div>
    );
};

export default Cards;