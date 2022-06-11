
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import AddRecords from './Pages/AddRecords';
import Navbar from './Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import UpdateRecords from './Pages/UpdateRecords';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add-items' element={<AddRecords/>}/>
       <Route path='/records/:id' element={<UpdateRecords/>}/>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
