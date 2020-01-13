import React, { useState, useEffect } from 'react';
import postData from "../posts/posts.json";
import ReactMarkdown from "react-markdown";
import PostList from './PostList.js';

export default function Home() {

    return (
        <div>

            <h3 className="mb-4 mt-4">About Me</h3>
            <p><b>I'm Rory...</b> a full-stack developer living in Denver, CO. I work for a leading media company and write about all things software & web development.</p>
            <p><b>I love computers and code.</b> I've been at it for a long time and I continue to challege myself every day!</p>
            <p><b>I work as a full-stack developer</b> for Gray Television, a leading media company. I'm interested in many languages, but my current jam is React, Node, and PHP.</p>
            <p>You can find me on <a href="https://www.twitter.com/rorywillis">Twitter</a> if you want to connect!</p>

            <h3 className="mb-4 mt-4">Posts</h3>
            <PostList/>

        </div>
    )
}
