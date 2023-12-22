import { Link } from "react-router-dom";





const Error = () => {
    return (
        <section className=" flex items-center justify-center h-screen bg-white">
            <div className="">
                <h2 className="text-4xl">You are coming wrong direction</h2>
                <p className="">
                   
                </p>
                <div className="text-center my-10 mt-6">
                    <Link to={"/"} className="border py-3 px-6 bg-green-300">
                        Back to home
                    </Link>
                </div>
                <img className="w-[36rem]" src="https://i.ibb.co/QHLp1LF/visuals-Jp-TY4g-Uvi-JM-unsplash.jpg" alt="" />
            </div>
        </section>
    );
};

export default Error