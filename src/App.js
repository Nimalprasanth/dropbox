import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Plan from './components/Plan/Plan';


import { Routes, Route} from 'react-router-dom';

function App(){
  return (
    <div className="App">

     <Navbar />
     
     { <Routes>
      <Route path="/"Component={Home}/>
      <Route path="/Products"Component={Products}/>
      <Route path="/Signup"Component={Signup}/>
      <Route path="/Login"Component={Login}/>
      <Route path="/Plan"Component={Plan}/>
     </Routes>
      }
      
      <Footer/>
      
      
      
      
      
      
     
    </div>
  );
}

export default App ;
