import React, { useState, useEffect } from 'react'
import ArticleCardHH from './ArticleCardHH'
import axios from 'axios';
import styled from 'styled-components';




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
                <PageWrapper>
                    <Title>Your Favorite Articles</Title>
                    <ArticleListWrapper>
                        <ArticleCardHH article={articleData} />
                    </ArticleListWrapper>
                </PageWrapper>
            </div>
     
    
    )
}


export default ArticleListHH;

const PageWrapper = styled.div`
width:90%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
border: 1px solid #FF5733;
text-align: center;
background-color: #FF5733;
color: white;
width: 50%;
`;

const ArticleListWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;

`;

// api is from "https://newsapi.org/v2/top-headlines?country=us&api" 
// key = c60fd773fb524cd78a202e8b4a8441ec