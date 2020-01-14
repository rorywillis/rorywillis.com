I recently decided to switch to markdown as the default format for new content. I already use it in the mac note taking app Bear and on Github, so it made sense for me when writing content as well.

However, I wasn't sure how to **dynamically display markdown** in a React component. Let's briefly go over over the requirements first...

1. I want to capture a slug (Ex. my-first-post) from the url using React Router.
2. Next, I want fetch a markdown file that matches the slug from a "posts" folder.
3. The markdown content from that file should then be rendered onto the page as html.
4. **And here's the cherry on top:** The component should also allow me to sprinkle in html for extra styling when necessary.

Now that we know what we want to do, let's look at the finished component that can handle this:

```
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import postData from "../config/posts.json";

export default function PostPage() {

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
                    <div className="mb-4 mt-4">
                        {meta.title && (
                            <h2 className="display-4 mb-0">{meta.title}</h2> 
                        )}
                        {meta.date && (
                            <small className="text-muted font-weight-light">{meta.date}</small>
                        )}
                    </div>
                    <ReactMarkdown source={post} escapeHtml={false} />
                </>
            )}
        </div>
    )
}
```

Finally, lets talk about this implementation:

1. The slug is fetched from the url using the `useParams()` hook that ships with react router. The url pattern itself is defined in my App.js file at the root of the project and it looks like so: `<Route path="/post/:slug"><PostPage /></Route>`
2. Inside of useEffect() which runs on first mount, we are using require() to actually import the dynamic markdown file.
3. We are using the React Markdown package to render the markdown as HTML.
4. By setting escapeHtml={false}, we can allow HTML tags to be parsed.

The page you are looking at right now is using this component. It's that easy!







