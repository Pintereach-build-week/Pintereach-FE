import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';

function ArticleList() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
            axios
                .get('http://pintereach-web30.herokuapp.com/articles')
                .then(response => {
                    console.log(response.data)
                    setArticleData(response.data)
                })
                .catch(error =>  {
                    console.log(error);
                })
    }, []);

    return (
        <div>
            <ArticleCard article={articleData} />
        </div>
    )
}

export default ArticleList;