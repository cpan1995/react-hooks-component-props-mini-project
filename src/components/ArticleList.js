import React from "react";
import Article from "./Article.js"

function ArticleList({articleArray}){
    return(
        <main>
            {
                articleArray.map(post => {
                   return <Article key={post.id} title={post.title} date={post.date} preview = {post.preview}/>
                })
            }
        </main>
    )
}

export default ArticleList;