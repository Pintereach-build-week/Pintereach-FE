import React from 'react';
import styled from 'styled-components';
// import CommentCardHH from '../comments/CommentCardHH';


function ArticleCardHH(props) {
    const { article } = props;
    const OneArticle = ({ info }) => (
        <Article>
            <h3>{info.title}</h3>
            <h4>{info.author}</h4>
            <p>{info.content}</p>
        </Article>
    )

    return (
        <div className="article-card">
            { article.map(one => {
                return <OneArticle key={one.title} info={one} />
            })
            }
        </div>
    )
}



 const Article = styled.div `
     border: 1px solid #FF5733;
     border-radius: 3px;
     padding: 1%;
     margin: 3%;
     width: 20%;
     text-align: center;
 `; 


export default ArticleCardHH;
