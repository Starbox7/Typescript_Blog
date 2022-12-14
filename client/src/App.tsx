import { useContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Mypage from './pages/mypage/Mypage';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  const { state } = useContext(LoginContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/explore" element={state.user?<Explore/>:<Login/>}/>
          <Route path="/:id" element={state.user?<Mypage/>:<Login/>}/>
          <Route path="/write" element={state.user?<Write/>:<Login/>}/>
          <Route path="/write/:id" element={state.user?<Write/>:<Login/>}/>
          <Route path="/setting" element={state.user?<Setting/>:<Login/>}/>
          <Route path="/login" element={state.user?<Home/>:<Login/>}/>
          <Route path="/register" element={state.user?<Home/>:<Register/>}/>
          <Route path="/single/:id" element={state.user?<Single/>:<Login/>}/>
          <Route path="/*" element={state.user?<Home/>:<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
