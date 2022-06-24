import { useState,useEffect } from "react"
 import axios from "axios"  
import "../../css/font.css"
import "../../css/signin.css"
export default function SignIn(){

  const [valor, setValor]=useState({ClaseName:"",mensaje:""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status,setStatus]=useState(null);
  const [error,setError]=useState(null);
  const [resultadoApi,setResultadoApi]=useState([]);
 /*  const userRef = useRef();
  const errRef = useRef(); */
 /* 
  const [errMsg, setErrMsg] = useState("");
  const [recibido,setRecibido]=useState([]);
   */
   /*  const navigate=useNavigate() */
 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     
      let url=`http://localhost:8000/api/account`
      let urlMasEmail=`${url}/${email}`
      try{
      let respuesta= await axios.get(urlMasEmail)
      setResultadoApi(respuesta.data)
      setStatus(respuesta.status)
      }catch(err){
        setError(err.response.status)
       
      }
      
    }  
    console.log(error)
 useEffect(()=>{
   if(status===null)
   {
    setValor({ClaseName:"",mensaje:""})
   }
    else if(status === 200){
       setValor({ClaseName:"p-4 bg-green-500",mensaje:"Los datos Coinciden"})
    } 
    else if(error === 405)
    {
       setValor({ClaseName:"p-4 bg-red-500",mensaje:"Error, los datos no coinciden"})
    }   
  },[status,error,valor.ClaseName,valor.mensaje]) 
  let autenticacion=()=>{
     resultadoApi.forEach(e => {
       console.log(e)
     });
   }
   autenticacion() 
   console.log(valor.ClaseName)
    return(
      
        <div className="contenedor">
        <span className={valor.ClaseName}> 
        <p className="text-white text-center">{valor.mensaje}</p>
        </span>
        <section  >
        <h2 className="text-center">Bienvenidos a Boleta de notas</h2>
        <form onSubmit={handleSubmit}>
        <label className="my-2">Correo Eléctronico</label>
        <br></br>
        <input type="email" className="p-1.5 rounded-md w-64 border-2 border-solid border-gray-300 outline-none my-2" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <label className="my-2">Contraseña</label>
        <br></br>
        <input type="password" className="p-1.5 rounded-md w-64 border-2 border-solid border-gray-300 outline-none my-2" name="password" value={password} onChange={(e)=>setPassword(e.target.password)}/>
        <br></br>
        <button className="bg-red-700 text-white p-2 w-64 my-2">Iniciar Sesión </button>
        <br></br>
        <span className="flex justify-center items-center p-0 m-0">
        <label>O continue con</label>
        </span>
        <br></br>
        <button className="bg-blue-800 text-white p-2 w-64 my-2">Facebook </button>
        <br></br>
        <button className="bg-white border-solid border border-gray-500 text-black p-2 w-64">Google </button>
        <br></br>
        <div className="text-xs inline-grid grid-cols-2 gap-12" >
          <a className="p-4" href="/">Crear Cuenta</a>
          <a className="p-4 grid grid-cols-1"  href="/"><span>Se te olvidó la </span>
            <span>contraseña</span></a>
        </div>
        </form>
        </section>
        </div>
        
     
  );
}
