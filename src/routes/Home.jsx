function Home({
    avatar,
    bio,
    blog,
    username,
    name,
    followers,
    following,
    createdAt,
}) {
    return (
        <>
            <h1>Home</h1>
            {avatar ? <img src={avatar} alt="avatar" /> : ""}
            {username ? <h1>{username}</h1> : ""}
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
        </>
    );
}

export default Home;
