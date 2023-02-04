import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Hotel } from './pages/Hotel/Hotel';
import { List } from './pages/List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/SayGonBooking.com-' element ={<Home/>}/>
        <Route path='/list' element ={<List/>}/>
        <Route path='/hotel/:id' element ={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
