


import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";



const Navbar = () => {
  const {user,loginOut}=useContext(AuthContext)
  const navigate =useNavigate()
  const handleLogOut=()=>{
    loginOut()
    .then(
     navigate('/')
    )
    .catch()
  }
    const navLinks =<>
         <li><NavLink to="/">Home</NavLink></li>
         
         <li><NavLink to="/myTask">My Task</NavLink></li>
         {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}

         <li><NavLink to="/contact">Contact</NavLink></li>
         <li><NavLink to="/profile">Profile</NavLink></li>
         
         
        {
        user?.email?<>
         <li ><button  onClick={handleLogOut}>Sign Out</button>
        
        </li>
        
        </>
        :
       <li> <Link to='/login'>Login</Link></li>
        
            }
    </>

  
  // console.log(user)
  // console.log('Picture',user?.photoURL)
  // console.log('userName',user?.displayName)

//   const handleLogOut =()=>{
//     loginOut()
//     .then()
//     .catch()
//   }
    return (
      
        <div >
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">TaskSwift

</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
        <p className="px-5">{user?.displayName}</p>
         
       <label tabIndex={0} className=" ">
       <div >
        <div className="w-10  rounded-full ">
         <img src={user?.photoURL} alt="" />
        </div>
        </div>
      </label>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;