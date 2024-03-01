import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";

import Home from "./routes/Home.jsx";
import Repositories from "./routes/Repositories.jsx";
import Followers from "./routes/Followers.jsx";
import Following from "./routes/Following.jsx";
import Gists from "./routes/Gists.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
                <Route path="/followers" element={<Followers />} />
                <Route path="/following" element={<Following />} />
                <Route path="/gists" element={<Gists />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
