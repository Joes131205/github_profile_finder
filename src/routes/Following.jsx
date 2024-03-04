import { useEffect, useState } from "react";

function Following(prop) {
    const [data, setData] = useState([]);
    console.log(prop);
    async function getData() {
        const response = await fetch(prop.following_url);
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    useEffect(() => {
        if (prop.following_url) {
            getData();
        }
    }, [prop.following_url]);
    return (
        <div className="flex flex-col gap-20">
            <h1 className="font-bold text-center text-4xl">Following</h1>

            <ul className="flex gap-4 flex-wrap items-center justify-center">
                {data.length === 0 ? (
                    <p>{`None :(`}</p>
                ) : (
                    data.map((user) => (
                        <li key={user.login}>
                            <a
                                href={user.html_url}
                                target="_blank"
                                className="flex gap-2 items-center px-5 py-2 border-2 border-white rounded-xl hover:scale-105 transition hover:font-bold"
                            >
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-10 h-10 rounded-full border-2 border-black"
                                />

                                <p>{user.login}</p>
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Following;
