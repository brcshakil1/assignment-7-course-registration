import './App.css'
import Cards from './components/Cards/Cards';
import Cart from './components/Cart/Cart';

function App() {
 

  return (
    <div className='flex flex-col-reverse md:flex-row'>
      <Cards />
      <Cart />
    </div>
  )
}

export default App
