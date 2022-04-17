import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import CheckOut from './components/Home/CheckOut/CheckOut'
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register'
import RequireAuth from './components/RequireAuth/RequireAuth';
import Notfound from './components/NotFound/Notfound';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
