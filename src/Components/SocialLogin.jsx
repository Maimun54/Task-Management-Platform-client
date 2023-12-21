import {FaGithub, FaGoogle} from "react-icons/fa"


import { useNavigate } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";


const SocialLogin = () => {
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const navigate =useNavigate()
   
    const handleGoogleLogin =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
         console.log(result.user)
         navigate('/')
        })
        .catch(error=>{
         console.error(error)
        })
        
     }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div className="justify-between flex" >
                
                <button onClick={handleGoogleLogin} className="btn font-bold">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
                <button className="btn font-bold">
                    <FaGithub className="mr-2"></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;