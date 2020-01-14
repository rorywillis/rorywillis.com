import React from 'react'
import PostList from './PostList'
import { Helmet } from "react-helmet";
import site from "../config/site.json";

export default function PagePosts() {
    return (
        <div>
            <Helmet>
                <title>{site.title} | Posts</title>
                <meta name="Description" content="My Posts"/>
            </Helmet>
            <h2 className="mb-4 display-4">Posts</h2>
            <PostList/>
        </div>
    )
}
