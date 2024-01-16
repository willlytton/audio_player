import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <>
            <div className="flex items-center py-7 gap-2 flex-col w-50 bg-neutral-900 w-40 min-h-screen"> 
                <Link
                    to=""
                    className="text-neutral-500"
                >
                    Home
                </Link>
                <Link
                    to="/discover"
                    className="text-neutral-500"
                >
                    Search
                </Link>
                <Link
                    to=""
                    className="text-neutral-500"
                >
                    Playlist
                </Link>
            </div>
        </>

    );
};

export default SideBar;