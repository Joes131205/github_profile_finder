import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="flex md:justify-between gap-10 md:h-10 bg-[#282c2c] items-center md:items-end justify-center text-center font-bold shadow-md shadow-[#282c2c] w-screen h-full mb-24">
            <ul className="flex flex-col md:flex-row md:gap-20 items-center justify-center ">
                <li className="hover:bg-[#404344] px-4 py-2 rounded-xl cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:bg-[#404344] px-4 py-2 rounded-xl cursor-pointer">
                    <Link to="/repositories">Repositories</Link>
                </li>
                <li className="hover:bg-[#404344] px-4 py-2 rounded-xl cursor-pointer">
                    <Link to="/followers">Followers</Link>
                </li>
                <li className="hover:bg-[#404344] px-4 py-2 rounded-xl cursor-pointer">
                    <Link to="/following">Following</Link>
                </li>
                <li className="hover:bg-[#404344] px-4 py-2 rounded-xl cursor-pointer">
                    <Link to="/gists">Gists</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
