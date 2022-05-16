import {Link} from "react-router-dom"
function Login(){
    return(
        <div className="w-52 h-20 bg-gray-100 border-solid border-blue-500 border-4 justify-end items-end flex-row absolute right-0">
            <div className=" w-48 h-14 border-t-2 border-b-2 inline-flex mx-1 my-2 items-center justify-center">
                <Link to="/SignIn" className="border-r-2 p-1 text-center">Sign In</Link>
                <Link to="/SignUp" className="p-1 text-center">Sign Up</Link>
            </div>
        </div>
    )
}
export default Login