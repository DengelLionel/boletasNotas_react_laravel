import "./../index.css"
import HeaderDen from './Sections/header';
import Planes from './Pages/planes';
import MainPrimary from './Pages/Home';

import {
  BrowserRouter,Routes,Route
} from "react-router-dom";


function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
      <HeaderDen/>
        <Routes>
      <Route path="/" element={<MainPrimary/>}></Route>
      <Route path="/planes" element={<planes/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
