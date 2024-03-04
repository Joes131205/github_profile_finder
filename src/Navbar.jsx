import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="flex justify-between gap-10 h-10 bg-[#282c2c] items-center text-center font-bold shadow-md shadow-[#282c2c]">
            <div>
                <h1>Github Profile Searcher</h1>
            </div>
            <div>
                <ul className="flex gap-20">
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
        </div>
    );
}

export default Navbar;
