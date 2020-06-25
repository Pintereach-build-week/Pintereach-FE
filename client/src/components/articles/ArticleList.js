import React, { useState } from "react"
import { ArticleCard } from "./ArticleCard"
import dummyData from "./dummy-data"

export const ArticleList = () => { 
    const [articleData] = useState(dummyData);

    return (
        <div className="article-list">
            {articleData.map(article => (
                <ArticleCard 
                    key = {article.article_name} article={article}
                />
            ))}
        </div>
    )
}

export default ArticleList;