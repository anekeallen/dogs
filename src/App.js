import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Api from "./api/Api";
import "./App.css";
import Conta from "./Components/User/Conta";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import {UserStorage} from './UserContext';
import ProtectedRoute from "./Components/Helper/ProtectedRoute";



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <UserStorage>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login/*" element={<Login/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path="conta/*" element={<ProtectedRoute> <Conta></Conta></ProtectedRoute>}/>
          </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
