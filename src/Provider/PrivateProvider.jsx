
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvide";

 
const PrivateProvider = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
     if(loader){
     return <span className="loading loading-spinner loading-lg mx-auto text-center"></span>
    // return <Skeleton  count={3}/>
     }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateProvider;