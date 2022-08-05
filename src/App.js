

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Moviedetails from './pages/MovieDetails'
import {AuthContext} from './components/context/AuthContext'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState();
  return (

    <AuthContext.Provider value={ {currentUser}}>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/details/:id' element={<Moviedetails/>} />
      </Routes>
    </AuthContext.Provider>
    
    );
}

export default App;
