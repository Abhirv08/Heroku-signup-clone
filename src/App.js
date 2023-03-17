
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./Firebase"
import { useEffect, useState } from 'react';


function App(){
  const [userName, setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  }, [])

  return (
    <Router >
      <Routes>
        <Route exact path="/home" element={<Home name={userName} />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;

