import{Link, Outlet} from "react-router-dom"
function Layauts(){
    return(
        <div >
        <div className=" relative pt-6 px-4 sm:px-6 lg:px-8 border-b-4 border-solid">
        
          <nav className=" relative flex items-start justify-end sm:h-10 lg:justify-end" aria-label="Global" >
              <section className="absolute left-0">
          <Link to="#">
                  <span className="sr-only">Workflow</span>
                  <img className=" h-8 w-auto sm:h-10" src="/img/svg/boleta_notas_logo.svg"/>
                </Link>
                </section>
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
            <Link to="/" >Inicio</Link>
              <Link to="/Planes" >Planes</Link>

              <Link to="#" >Conócenos</Link>

              <Link to="#" >Contactos</Link>
      
              <Link to="#" ><img className="inline-flex" src="./img/svg/login.svg" /></Link>
            </div>
          </nav>
          <section>
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
              <Link to="#" >Product</Link>

              <Link to="#" >Features</Link>

              <Link to="#" >Marketplace</Link>

              <Link to="#" >Company</Link>
            </div>
            <Link to="#" > Log in </Link>
          </div>
        </div>
      </div>
    )
}
export default Layauts