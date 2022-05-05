import "./../index.css"
import HeaderDen from './Sections/header';
import Planes from './Pages/planes';
import MainPrimary from './Pages/Home';
import Login from "./cuadrosDialog/login"
import {
  BrowserRouter,Routes,Route
} from "react-router-dom";



function App() {
  return (
    
      <BrowserRouter>
        <div >
        <Routes>
          <Route path="/" element={<HeaderDen/>}>
      <Route index element={<MainPrimary/>}></Route>
      <Route path="Planes" element={<Planes/>}></Route>
      
      </Route>
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
