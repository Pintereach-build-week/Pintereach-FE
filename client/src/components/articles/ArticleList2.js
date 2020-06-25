import React, { useState, useEffect } from 'react'
import ArticleCard2 from './ArticleCard2';
// import dummyData from './dummy-data'
import axios from 'axios';

// const API_URL = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='
// const API_KEY = 'eec8f7040ccc42eb9762bd8128320ec2'

function ArticleList2() {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        axios
            .get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eec8f7040ccc42eb9762bd8128320ec2')
            .then(response => {
                console.log(response.data.articles)
                setArticleData(response.data.articles)
            })
            .catch(error =>  {
                debugger
            })
    }, [])

    return (
        <div>
            <div>
                <ArticleCard2 article={articleData} />
            </div>
        </div>
    )
}

export default ArticleList2;