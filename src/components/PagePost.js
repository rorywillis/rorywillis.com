import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import postData from "../config/posts.json";
import Disqus from 'disqus-react';

export default function PagePost() {

    const [post, setPost] = useState();
    const [meta, setMeta] = useState();
    const [disqus, disqusConfig] = useState();
    const { slug } = useParams();
    const { url } = useLocation();

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
                <div className="mb-4 mt-4">
                    <h2 className="display-4 mb-0">
                        {meta.title}
                    </h2> 
                    {meta.date && (<small className="text-muted font-weight-light">{meta.date}</small>)}
                </div>

                    <ReactMarkdown source={post} escapeHtml={false} />

                    <div className="mt-4">
                        <Disqus.DiscussionEmbed shortname={"rorywillis.com"} config={{
                            url: url,
                            identifier: slug,
                            title: meta.title,
                        }} />
                    </div>
                </>
            )}
        </div>
    )
}
