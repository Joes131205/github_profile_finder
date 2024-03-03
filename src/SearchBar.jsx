import { useState } from "react";

function SearchBar({ onUserUpdate }) {
    const [userInput, setUserInput] = useState("");
    function handleChange(e) {
        const name = e.target.value;
        console.log(name);
        setUserInput(name);
    }
    async function searchUser(e) {
        e.preventDefault();
        const response = await fetch(
            `https://api.github.com/users/${userInput}`
        );
        const data = await response.json();
        const obj = {
            avatar_url: data.avatar_url,
            bio: data.bio,
            blog: data.blog,
            created_at: data.created_at,
            followers: data.followers,
            followers_url: data.followers_url,
            following: data.following,
            following_url: `https://api.github.com/users/${userInput}/following`,
            html_url: data.html_url,
            login: data.login,
            name: data.name,
            repos_url: data.repos_url,
            starred_url: `https://api.github.com/users/${userInput}/starred`,
            gists_url: `https://api.github.com/users/${userInput}/gists`,
        };
        onUserUpdate(obj);
    }

    return (
        <form onSubmit={searchUser}>
            <input
                type="text"
                placeholder="Github Username..."
                onChange={handleChange}
                name="username"
                id="username"
            />
            <input type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;
