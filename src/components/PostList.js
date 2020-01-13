import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function PostList(props) {

    const { showTitles = true, showDescriptions = true, showDates = true } = props;
    const [posts, setPosts] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        import("../config/posts.json").then((data) => {
            setPosts(Object.values(data));
        });
    }

    return (
        <div>
            {posts && posts.map(post => (
                <>
                    {showTitles && (
                        <h5 className="mb-2">
                            <Link to={`/post/${post.slug}`}>{post.title}</Link>
                        </h5>
                    )}
                    {showDescriptions && (<p className="">{post.description}</p>)}
                </>
            ))}
        </div>
    )
}