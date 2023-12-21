import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <div className="lg:w-[1200px] mx-auto">
                <div className="flex ">
                    <h2 className="lg:text-2xl font-bold">See how Micronet can help you improve your systems & productivity.</h2>
                    <h2 className="text-xl ml-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                </div>
                <div className="gird grid-cols-1 lg:grid-cols-2">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Home;