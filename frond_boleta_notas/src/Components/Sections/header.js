import { Link,NavLink,Outlet} from "react-router-dom"
import Login from "./../cuadrosDialog/login"
import { useState } from "react"
import React from "react"
//Las propiedades del login 
let login={
    id:"botonlogin",
    clase:"inline-flex",
    src:"./img/svg/login.svg"
}
//---
// El boton login con las respectivas propiedades llamadas por el props
function BotonLogin(props){
  return(
    <button id={props.login.id} ><img className={props.login.clase} src={props.login.src} onClick={props.clic}/></button >
  )
}
// --- 

//Con esta función nos encargamos a que trabaje junto con el estado cuando hacemos click en le boton login
function ApareceLogin(){
    return(
      <Login/>
    )
}

// --- ---------------------
// Utilicé el React.Component para hacer trabajar mi boton login 
function HeaderCompleto(props){
  /* ========== Para que aparesca el login  ================== */
  const[estado,setEstado]= useState(true)
  /* ========== ----------------  ================== */
    return(
      <div className="m-0" >
      <div className=" relative pt-6 px-4 sm:px-6 lg:px-8 ">
      
            <nav className=" relative flex items-start justify-end sm:h-10 lg:justify-end" aria-label="Global" >
       
              <Link to="#" className="absolute left-0">
            
                <img className=" h-8 w-auto sm:h-10" src="/img/svg/boleta_notas_logo.svg"/>
                </Link>
            
               <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
              
                 <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
   
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                  </button>
                  </div>
                  </div>
                 </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
           
                  <NavLink to="/"  className="font-medium text-gray-500 hover:text-gray-900">Inicio</NavLink>

          
                  <NavLink to="/Planes"className="font-medium text-gray-500 hover:text-gray-900">Planes</NavLink>
        

         
                <NavLink to="/Conocenos"  className="font-medium text-gray-500 hover:text-gray-900" >Conócenos</ NavLink>
         
                <NavLink to="/Contactos" className="font-medium text-gray-500 hover:text-gray-900">Contactos</NavLink>
  
                 <BotonLogin login={login} clic={()=>setEstado(!estado)}
                 
                 />{estado?"":ApareceLogin()}
                
                 
                    
                </div>
               </nav>
             <section className="m-0">
                <Outlet/>
              </section>
            </div>
            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className= "h-8 w-28" src="./img/svg/boleta_notas_logo.svg" alt=""/>
                    </div>
                    <div className="-mr-2">
                      <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                      
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    
                    <Link to ="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</Link>
                  

                  
                    <Link to="#"  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</Link>
                  
                    <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</Link>
                
                    <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</Link>
                
                  </div>
              
                  <Link to="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </Link>
         
        </div>
      </div>
    </div>

    )
  
 
        
}

   

export default HeaderCompleto