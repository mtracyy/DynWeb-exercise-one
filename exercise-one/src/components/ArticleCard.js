import React from 'react';

function ArticleCard({articleData}) {
    console.log("article card article", articleData);
    return (
        <article>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <h2>{articleData.title}</h2>
                <p>Date</p>
                <p>{articleData.blurb}</p>
                <a href="">Read More</a>
            </div>
        </article>
    );
}

// {} brackets mean there's gonna be JS???

export default ArticleCard;