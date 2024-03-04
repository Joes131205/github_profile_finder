import { useState, useEffect } from "react";

function Gists(prop) {
    const [data, setData] = useState([]);
    async function getData() {
        const response = await fetch(prop.gists_url);
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    useEffect(() => {
        if (prop.gists_url) {
            getData();
        }
    }, [prop.gists_url]);
    return (
        <div className="flex flex-col gap-20">
            <h1 className="font-bold text-center text-4xl">Gists</h1>
            <ul className="flex gap-4 flex-wrap items-center justify-center">
                {data.length === 0 ? (
                    <p>{`None :(`}</p>
                ) : (
                    data.map((gist) => (
                        <li key={gist.id}>
                            <a
                                href={gist.html_url}
                                className="flex gap-2 items-center px-5 py-2 border-2 border-white rounded-xl hover:scale-105 transition hover:font-bold"
                                target="_blank"
                            >
                                {gist.description ?? "Unnamed Gist"}
                                <img
                                    src={gist.owner.avatar_url}
                                    alt={gist.owner.login}
                                    className="w-10 h-10 rounded-full border-2 border-black"
                                />
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Gists;
