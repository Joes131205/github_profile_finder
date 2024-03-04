import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SearchBar from "./SearchBar.jsx";

import Home from "./routes/Home.jsx";
import Repositories from "./routes/Repositories.jsx";
import Followers from "./routes/Followers.jsx";
import Following from "./routes/Following.jsx";
import Gists from "./routes/Gists.jsx";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({});

    function handleUserUpdate(newUser) {
        setUser(newUser);
    }
    return (
        <BrowserRouter>
            <Navbar />
            <SearchBar onUserUpdate={handleUserUpdate} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            avatar={user.avatar_url ?? ""}
                            bio={user.bio ?? ""}
                            blog={user.blog ?? ""}
                            username={user.login ?? ""}
                            name={user.name ?? ""}
                            followers={user.followers ?? ""}
                            following={user.following ?? ""}
                            createdAt={user.created_at ?? ""}
                            html_url={user.html_url ?? ""}
                        />
                    }
                />
                <Route
                    path="/repositories"
                    element={<Repositories repositories={user.repos_url} />}
                />
                <Route
                    path="/followers"
                    element={
                        <Followers followers_url={user.followers_url ?? ""} />
                    }
                />
                <Route
                    path="/following"
                    element={
                        <Following following_url={user.following_url ?? ""} />
                    }
                />
                <Route
                    path="/gists"
                    element={<Gists gists_url={user.gists_url} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
