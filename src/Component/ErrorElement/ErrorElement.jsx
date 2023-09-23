
const ErrorElement = () => {
    return (
        <div className="relative">
            <img className="mx-auto" src="https://i.ibb.co/GW1t8T4/dribbble-1.gif" alt="" />
            <div className="absolute top-[500px] right-[45%]">
                <h1 className="text-5xl text-center font-extrabold">Opps!!!</h1>
                <p className="text-center text-xl mt-4">Page not found</p>
            </div>
        </div>
    );
};

export default ErrorElement;