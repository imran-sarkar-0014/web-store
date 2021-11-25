import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ItemView from './pages/ItemView'
import Search from './pages/Search';

function App() {

  return (
    <div className='bg-gray-100 min-w-full overflow-x-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<ItemView />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
