import React from 'react'
// import styled from 'styled-components'
// import { Link } from "react-router-dom"

// const Article = styled.div`
//     margin: 2%;
//     padding: 4%;
//     border: 1px solid rgba(var(--ca6,219,219,219),1);
//     box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
//     border-radius: 3px;
//     text-align: center;
//     font-family: 'Roboto', sans-serif;
// `;

function ArticleCard({ articleData }) {

    return (

        <div className="article-card">
            <h3 className='title'>{articleData.article_name}</h3>
            <p>{articleData.article_url}</p>
        </div>
    )
}

export default ArticleCard;