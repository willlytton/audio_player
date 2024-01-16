import { Routes, Route, Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";
import ActiveStatusBar from "./components/ActiveStatusBar";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";


const App = () => {
  return (
    <div className="flex relative overflow-hidden scrollbar-hidden">

      <div className="">
        <SideBar />
      </div>

        <div className="px-6 py-5 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
        </div>
        
        <Outlet />

      <div className="absolute h-24 bottom-0 left-0 right-0 bg-zinc-900 z-10">
        <ActiveStatusBar />
      </div>

    </div>
  );
};
  

export default App;