import React, { useState, useEffect } from 'react'
import ArticleCardHH from './ArticleCardHH'
import axios from 'axios';

const ArticleListHH = (props) => { 
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c60fd773fb524cd78a202e8b4a8441ec")
        .then(response => {
            console.log("Success", response.data.articles)
            setArticleData(response.data.articles)
        })
        .catch(error => {
            console.log("Error", error)
        })
    }, [])

    return (
        <div>
            <h1>Your Favorite Articles</h1>
            <ArticleCardHH article={articleData} />
        </div>
    
    )
}

export default ArticleListHH;

// api is from "https://newsapi.org/v2/top-headlines?country=us&api" 
// key = c60fd773fb524cd78a202e8b4a8441ec