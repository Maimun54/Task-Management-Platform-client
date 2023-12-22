import { useContext } from "react";

import { AuthContext } from "../../Provider/AuthProvide";
import App from "../../App";


const UserDashboard = () => {
    const {user} = useContext(AuthContext);
    // if (!user) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
        <div>
            <h1 className="text-4xl text-center text-red-500 font-bold">Dashboard</h1>
            <h2 className="text-2xl font-semibold"><span className="text-teal-500">Welcome</span> @ {user?.displayName}</h2>
                <App></App>
        </div>
        </>
    );
};

export default UserDashboard;