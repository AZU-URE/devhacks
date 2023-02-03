import {FiMusic} from "react-icons/fi";
import {AiOutlineLike} from "react-icons/ai";
import {AiOutlineHistory} from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex flex-col ml-5 p-5">
      <div id="logo" className="m-2">
        <h2 className="yellow text-3xl font-bold font-mono">Hackthistune</h2>
      </div>
      {/* Navlist */}
      <ul className="flex flex-col gap-3">
        <div className="flex flex-col gap-10 ml-5 mt-6 font-mono">
          <li className="flex items-center gap-2 hover:text-yellow-400">
            <FiMusic/>
            <a href="">Explore</a>
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-400">
            <AiOutlineLike/>
            <a href="">Liked Songs</a>
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-400">
            <AiOutlineHistory/>
            <a href="">Recent</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
