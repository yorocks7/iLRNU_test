import Navbar from './Components/Navbar';
import BG from './Assets/bg.jpg'
import { useState } from 'react'
import Login from './Components/Login';


function App() {

  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin(true);
  const handleLogout = () => setLogin(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleToggle () {
    handleLogin();
    handleClose();
  } 

  return (
    <div className="bg-cover overflow-hidden h-screen bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
      <Navbar isLogin={login} logout={handleLogout} login={handleShow}/>
      <Login toggle={handleToggle} show={show} close={handleClose}/>
    </div>
  );
}

export default App;
