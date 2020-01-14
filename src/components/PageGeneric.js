import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import pageData from "../config/pages.json";
import { Helmet } from "react-helmet";
import site from "../config/site.json";

export default function PageGeneric() {

    const [page, setPage] = useState();
    const [meta, setMeta] = useState();
    const { slug } = useParams();

    useEffect(() => {
        const md = require(`../pages/${slug}.md`)
        fetch(md)
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            setMeta(pageData.filter(page => page.slug == slug)[0]);
            setPage(text);
        });
    }, []);

    return (
        <div>
            {page && (
                <>
                    <Helmet>
                        <title>{site.title} | {meta.title}</title>
                        <meta name="Description" content={meta.description}/>
                    </Helmet>
                    <div className="mb-4 mt-4">
                        <h2 className="display-4 mb-0">
                            {meta.title}
                        </h2> 
                        {meta.date && (<small className="text-muted font-weight-light">{meta.date}</small>)}
                    </div>
                    <ReactMarkdown source={page} escapeHtml={false} />
                </>
            )}
        </div>
    )
}
