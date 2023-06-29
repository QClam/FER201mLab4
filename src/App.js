import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Films';
import {Routes,Route} from "react-router-dom";
import Detail from './components/Detail'
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}
export default App

