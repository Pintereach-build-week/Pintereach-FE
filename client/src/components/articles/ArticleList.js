import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';

function ArticleList() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        axios
            .get('https://pintereach-web30.herokuapp.com/articles')
            .then(response => { 
                console.log('response',response.data)
                setArticleData(response.data)
               
            })
            .catch(error =>  {
                
            })
    }, [])

    return (
        <div>
            <div>
               
            {
                articleData.map(ar => {
                    return <ArticleCard key={ar.id} articleData={articleData} />
                })
            }
            </div>
        </div>
    )
}

export default ArticleList;