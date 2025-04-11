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
            {posts.map((post, index) => {
                let path = post.title.toLowerCase()
                return (
                <div className="BlogTile">
                    <Link to={"/blog/".concat(path)}>{post.title}</Link><p>{post.date}</p>
                </div>
                )
            })}
        </div>
    )

}