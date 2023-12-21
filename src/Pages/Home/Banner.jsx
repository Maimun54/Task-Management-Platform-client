import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <h2 className="lg:text-6xl text-3xl md:text-4xl font-bold text-center mt-32">Manage work
                    <br /><span className="text-[#fdb902] lg:-ml-16"></span> Efficiently
                </h2>
                <h4 className="text-center text-3xl py-5 lg:ml-7 ">Plan, Track and Organise your work.</h4>
                <p className="lg:text-2xl md:text-xl lg:py-5 lg:px-5 text-center mt-5 ">An Intranet platform to Manage projects, <br /> organise work and focus on what’s important.</p>
                <Link to='/login'><button className="btn btn-primary text-center justify-center items-center my-5 lg:ml-44 md:ml-44 ml-10 ">Let’s Explore</button></Link>
            </div>
            <div className="lg:w-1/2">
                <img className="lg:w-full md:w-2/3 w-full mx-auto" src="https://i.ibb.co/BPyJVPm/her-micronet.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
