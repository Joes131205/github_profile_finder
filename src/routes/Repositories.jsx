import { useEffect, useState } from "react";

function Repositories(prop) {
    const [data, setData] = useState([]);
    async function getData() {
        const response = await fetch(prop.repositories);
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        if (prop.repositories) {
            getData();
        }
    }, [prop.repositories]);
    return (
        <div className="flex flex-col gap-20">
            <h1 className="font-bold text-center text-4xl">Repositories</h1>
            <ul className="flex gap-4 flex-wrap items-center justify-center">
                {data.length === 0 ? (
                    <p>{`No Repositories :(`}</p>
                ) : (
                    data.map((repo) => (
                        <li key={repo.name}>
                            <a
                                href={repo.html_url}
                                className="flex gap-2 items-center px-5 py-2 border-2 border-white rounded-xl hover:scale-105 transition "
                                target="_blank"
                            >
                                {repo.name}
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Repositories;
