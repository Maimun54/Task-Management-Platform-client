
import { Link, useLocation, useNavigate } from "react-router-dom";





import Swal from "sweetalert2";

import SocialLogin from "../../Components/SocialLogin";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";



const Login = () => {
     const {signIn}=useContext(AuthContext)
    const navigate =useNavigate()
    const location =useLocation()
    const handleLogin= e =>{
    e.preventDefault()
        const form =e.target
      const email =form.email.value 
      const password=form.password.value 
      console.log(email,password)

     
      signIn(email,password)
      .then(result=>{
        console.log(result.user)
        navigate(location?.state? location.state :'/dashboard')
      })
      .catch(error=>{
        console.error(error)
        Swal("Sorry!", "You email and password is wrong!", "error");
        return
      })

    }
   

    return (
        <div>
             <div className="text-center">
             <h2 className="text-4xl uppercase font-bold py-3">

             </h2>
             <h2 className="text-4xl font-bold py-3">LOGIN NOW</h2>
                
            </div>
            
            <form onSubmit={handleLogin}  className=" mx-auto md:w-3/4 lg:w-2/5">

       
       <div className="form-control ">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name="email"  required placeholder="Type your email" className="input input-bordered"  />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" required name="password" placeholder="Type your password" className="input input-bordered"  />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Login</button>
       <div >
                
                 <SocialLogin></SocialLogin>
                <div>
               
            </div>
            </div>
     </div>
       </form>
       <p className="text-center py-5">Do not have an account?
       
       <div className="">
       <Link to="/register" className="text-blue-600 font-bold">
         Create a Account</Link>
          
       </div>
          
          </p>
        </div>
    );
};

export default Login;