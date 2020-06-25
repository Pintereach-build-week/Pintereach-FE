import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Article = styled.div`
    margin: 2%;
    padding: 4%;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 3px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

function ArticleCard(props) {
    const { article } = props;

    const EachArticle = ({ info }) => (
        <Article className='article'>
            <h3 className='title'>{info.article_name}</h3>
            <br />
            <Link to={info.article_url}>{info.article_url}</Link> 
            <br />
            <p>{info.category_id}</p>
        </Article>
    )

    return (
        <div className="article-card">
            {
                article.map(ar => {
                    return <EachArticle key={ar.id} info={ar} />
                })
            }
        </div>
    )
}

export default ArticleCard;