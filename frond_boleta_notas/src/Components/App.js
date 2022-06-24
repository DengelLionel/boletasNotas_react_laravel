import "./../index.css"
import HeaderCompleto from './Sections/header';
import Planes from './Pages/planes';
import MainPrimary from './Pages/Home';
import SignIn from './Pages/SignIn';
import Login from "./cuadrosDialog/login";
import {
  BrowserRouter,Routes,Route
} from "react-router-dom";



function App() {
  return (
    
      <BrowserRouter>
        <div >
        <Routes>
          <Route path="/" element={<HeaderCompleto/>}>
      <Route index element={<MainPrimary/>}></Route>
      <Route path="Planes" element={<Planes/>}></Route>
      
      </Route>
      <Route path="/" >
        <Route path="SignIn" element={<SignIn/>}></Route>
        </Route>
        
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
