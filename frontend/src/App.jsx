
import Welcome from './Welcome';
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup';
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Upcomshows from './components/upcomming/Upcomshows'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
