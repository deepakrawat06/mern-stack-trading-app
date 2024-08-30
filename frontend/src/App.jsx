import Navbar from './components/Navbar';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Signup from './components/signup/Signup';
import Footer from './components/Footer';
import Support from './components/Support';

function App() {
  

  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/support' element={<Support/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    
  )
}

export default App
