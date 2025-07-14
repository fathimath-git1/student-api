import logo from './logo.svg';
import './App.css';
import Addstu from './Addstu';
import Searchstu from './component/Searchstu';
import Deletestu from './component/Deletestu';
import Viewstu from './component/Viewstu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addstu/>}/>
  <Route path='/Searchstu' element={<Searchstu/>}/>
  <Route path='/Deletestu' element={<Deletestu/>}/>
  <Route path='/Viewstu' element={<Viewstu/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
