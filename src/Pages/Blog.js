import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/app.css';
import '../Style/Blog.css';
import blogposts from '../BlogPosts.json';


function CreateBlogElements() {
    const new_posts = [];
    for (let post of blogposts){
        new_posts.push({
            title: post.title,
            content: post.content.replace("\n"," "),
            date: post.date,
            element: (
            <div className="HomeBackground">
                <div className="BlogPost">
                    <Link to={"/blog"}>{"<- Blog"}</Link>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            </div> )
        })
    }
    return new_posts;
}

export const posts = CreateBlogElements();

export function Blog() {

    return (
        <div className="HomeBackground">
            <div className="BlogPage">
                <h1>Blog</h1>
                {posts.map((post, index) => {
                    let path = post.title.toLowerCase()
                    return (
                    <div className="BlogTile">
                        <Link to={"/blog/".concat(path)}><h1>{post.title}</h1><p>{post.date}</p></Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}