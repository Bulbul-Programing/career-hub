import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Rote = () => {
    return (
        <div>
            <div className="mx-auto bg-[#9873FF0D] px-32 py-12">
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Rote;