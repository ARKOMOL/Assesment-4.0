
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddRecords from './Pages/AddRecords';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add-items' element={<AddRecords/>}/>
       <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
