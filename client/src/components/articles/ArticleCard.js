import React from "react"
import styled from "styled-components"

export const ArticleCard = ({article}) => {
    const { article_name, article_content, category_id } = article;
    
    return (
        <div className="article-card">
            <h2>{article_name}</h2>
            <div className="article-content">
                <p>{article_content}</p>
            </div>
            <div className="article-category">
                <Category>{category_id}</Category>
            </div>
        </div>
    )
}

const Category = styled.p `
    border: 1px solid #FF5733;
    border-radius: 3px;
    padding: 1%;
    width: 20%;
    text-align: center;
`;

export default ArticleCard;