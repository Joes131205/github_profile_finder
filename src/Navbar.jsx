import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <ul className="flex gap-10">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/repositories">Repositories</Link>
                </li>
                <li>
                    <Link to="/followers">Followers</Link>
                </li>
                <li>
                    <Link to="/following">Following</Link>
                </li>
                <li>
                    <Link to="/gists">Gists</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
