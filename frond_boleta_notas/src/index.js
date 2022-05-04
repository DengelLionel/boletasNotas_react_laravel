import {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';
import HeaderDen from './Components/ElementosMaq/header';

render(
  <StrictMode>
    <HeaderDen/>
    <App />
    
  </StrictMode>,
  document.getElementById("root")
);


