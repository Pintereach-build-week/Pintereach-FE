import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';

function ArticleList() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        axios
            .get('https://pintereach-web30.herokuapp.com/articles')
            .then(response => {
                console.log(response)
                setArticleData(response)
            })
            .catch(error =>  {
                // debugger
            })
    }, [])

    return (
        <div>
            <div>
                <ArticleCard article={articleData} />
            </div>
        </div>
    )
}

export default ArticleList;