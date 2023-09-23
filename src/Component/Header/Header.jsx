import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-7">
                <h1 className="text-2xl font-extrabold">CareerHub</h1>
                <div className="flex gap-6">
                    <Link to='/'>Home</Link>
                    <Link to='/applied-job'>Applied Jobs</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <button className="px-5 py-3 rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Star Applying</button>
            </div>
        </div>
    );
};

export default Header;