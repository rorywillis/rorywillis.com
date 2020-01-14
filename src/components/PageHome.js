import React, { useState, useEffect } from 'react';
import PostList from './PostList.js';
import { Helmet } from "react-helmet";
import site from "../config/site.json";

export default function Home() {

    return (
        <div>
            <Helmet>
                <title>{site.title} | Home</title>
                <meta name="Description" content={site.description}/>
            </Helmet>
            <h3 className="mb-4 mt-4">About Me</h3>
            <p>
                <b>I'm Rory</b>, a full-stack developer living in Denver. I work for a leading media company and write about all things software & web development. You can find me on <a href="https://www.twitter.com/rorywillis">Twitter</a> if you want to connect!
            </p>
            <h3 className="mb-4 mt-4">Posts</h3>
            <PostList/>
        </div>
    )
}
