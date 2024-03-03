import { useEffect, useState } from "react";

function Followers(prop) {
    const [data, setData] = useState([]);
    console.log(prop);
    async function getData() {
        const response = await fetch(prop.followers_url);
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    useEffect(() => {
        if (prop.followers_url) {
            getData();
        }
    }, [prop.followers_url]);
    return (
        <>
            <h1>Followers</h1>

            <ul className="flex gap-4 flex-wrap items-center justify-center">
                {data.map((user) => (
                    <li key={user.login}>
                        <a
                            href={user.html_url}
                            className="flex gap-2 items-center px-5 py-2 border-2 border-black rounded-xl"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />

                            <p>{user.login}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Followers;
