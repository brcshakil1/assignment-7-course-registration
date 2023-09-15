import './App.css'
import Cards from './components/Cards/Cards';
import Cart from './components/Cart/Cart';

function App() {
 

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-12'>Course Registration</h1>
      <div className='flex flex-col-reverse md:flex-row container mx-auto gap-16'>
        <Cards />
        <Cart />
      </div>
    </>
  )
}

export default App
