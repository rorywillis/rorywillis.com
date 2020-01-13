import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export default function PagePost() {

    const [post, setPost] = useState();
    const { slug } = useParams();

    useEffect(() => {
        const md = require(`../posts/${slug}.md`)
        fetch(md)
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            console.log(text);
            setPost(text);
        });
    }, []);

    return (
        <div>
            {post && (
                <ReactMarkdown source={post} />
            )}
        </div>
    )
}
