import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards';
import Cart from './components/Cart/Cart';
import { toast } from 'react-toastify';


function App() {
  const [courses, setCourses] = useState([]);
  const [hours, setHours] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [courseTotalPrice, setCourseTotalPrice] = useState(0);

  const notify = () => toast("You can't credit more than 20 hours");

  const handleCoursesName = (id,item, credit, price) => {
    const ifMatch = courses.find(course => course.id === id);
    const totalHours = hours + credit;
    const totalPrice= courseTotalPrice + price;
    if(ifMatch) {
      alert('Course is already exist')
    } else {
      if(totalHours > 20) {
        notify()
      } else {
        setCourseTotalPrice(totalPrice);
        setHours(totalHours);
        setRemaining(remaining - credit);
        setCourses([...courses, item]);
      }
    }
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-12'>Course Registration</h1>
      <div className='flex flex-col-reverse lg:flex-row container mx-auto gap-10'>

        {/* Cards */}
        <Cards handleCoursesName={handleCoursesName}/>

        {/* cart */}
        <div className='bg-white p-4 rounded-lg md:h-[400px] mx-4'>
          <h3 className='text-[18px] text-[#2F80ED] font-bold pb-4'>Credit Hour Remaining {remaining} hr</h3>
          <hr />
          <h3 className='pt-4 text-[18px] font-bold'>Course Name</h3>

          <Cart courses={courses}/>

          <hr />
          <h3 className='py-4'>Total Credit Hour : {hours}</h3>
          <hr />
          <h3 className='pt-4'>Total Price : {courseTotalPrice} USD</h3>
        </div>

      </div>
    </>
  )
}

export default App
