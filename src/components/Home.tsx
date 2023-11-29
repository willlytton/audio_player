import SideBar from "./SideBar"

const Home = () => {
    return (
        <div className="flex w-full bg-slate-600">
            <div className="flex flex-col relative w-60 h-screen overflow-y-auto bg-gray-800">
                <div className="flex flex-col px-2">
                    <SideBar />
                </div>

            </div>
        </div>
    );
};

export default Home;