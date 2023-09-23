
const Banner = () => {
    return (
        <div className="pt-10 flex items-center">
            <div className="w-1/2 px-9">
                <h1 className="text-6xl leading-tight font-extrabold">One Step Closer To Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h1>
                <p className="text-[#757575] font-medium my-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="px-5 py-3 rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/gmFRzjc/user.png" alt=""/>
            </div>
        </div>
    );
};

export default Banner;