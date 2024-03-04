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
        console.log(obj.repos_url);
        onUserUpdate(obj);
    }

    return (
        <form
            onSubmit={searchUser}
            className="flex flex-col items-center text-center my-4"
        >
            <input
                type="text"
                placeholder="Github Username..."
                onChange={handleChange}
                name="username"
                id="username"
                className="px-5 py-2 rounded-xl border-2 border-black text-black outline-transparent font-bold text-center"
                autoComplete="none"
            />
            <input
                type="submit"
                value="Search"
                className="cursor-pointer mt-5 px-5 py-2 bg-[#124a1f] rounded-xl hover:scale-110 transition hover:font-bold hover:bg-[#279e43]"
            />
        </form>
    );
}

export default SearchBar;
