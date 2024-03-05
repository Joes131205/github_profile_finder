function Home({
    avatar,
    bio,
    blog,
    username,
    name,
    followers,
    following,
    createdAt,
    html_url,
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="font-bold text-4xl">Home</h1>
            {avatar ? (
                <img
                    src={avatar}
                    alt="avatar"
                    className="w-40 h-40 rounded-full border-white border-4 shadow-white shadow-xl"
                />
            ) : (
                ""
            )}
            {username ? (
                <a href={html_url} target="_blank">
                    <h1 className="text-xl font-bold underline underline-offset-4">
                        {username}
                    </h1>
                </a>
            ) : (
                ""
            )}
            {name ? <h2>{name}</h2> : ""}
            {bio ? <p>{bio}</p> : ""}
            {blog ? <p>{blog}</p> : ""}
            {followers ? <p>Followers: {followers}</p> : ""}
            {following ? <p>Following: {following}</p> : ""}
            {createdAt ? (
                <p>Joined At: {createdAt.slice(0, createdAt.indexOf("T"))}</p>
            ) : (
                ""
            )}
        </div>
    );
}

export default Home;
