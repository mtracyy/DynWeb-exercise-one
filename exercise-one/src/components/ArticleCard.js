import React from 'react';

// const styles = {
//     padding: '20px',
//     marginLeft: '20px'
// };

function ArticleCard({articleData}) {
    console.log("article card article", articleData);
    return (
        <article className="articleCard">
            {/*<div style={{*/}
                {/*padding: '20px',*/}
                {/*marginLeft: '20px'*/}
            {/*}}>*/}
            <div className="articleCard__image">
                <img src={articleData.image.url} alt={articleData.image.alt}/>
            </div>
            <div className="articleCard__text">
                <h2>{articleData.title}</h2>
                <p>Date</p>
                <p>{articleData.blurb}</p>
                <a href={`article/${articleData.id}`}>Read More</a>
            </div>
        </article>
    );
}

// {} brackets mean there's gonna be JS???

export default ArticleCard;