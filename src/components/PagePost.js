import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import postData from "../posts/posts.json";

export default function PagePost() {

    const [post, setPost] = useState();
    const [meta, setMeta] = useState();
    const { slug } = useParams();

    useEffect(() => {
        const md = require(`../posts/${slug}.md`)
        fetch(md)
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            setMeta(postData.filter(post => post.slug == slug)[0]);
            setPost(text);
        });
    }, []);

    return (
        <div>
            {post && (
                <>
                    <h2 className="mb-4">{meta.title}</h2> 
                    <ReactMarkdown source={post} />
                </>
            )}
        </div>
    )
}
