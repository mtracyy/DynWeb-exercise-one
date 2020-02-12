import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Data from '../components/Data';

function ArticleListing() {
    console.log('data', Data);
    return (
        <div>
            <header>
                <h1>Articles</h1>
            </header>
            <main>
                {Data.map((article, i) => ( //looping through array of Data; arrow means auto-returning; article is single object in Data
                    <ArticleCard key={i} articleData={article}/> //basically running ArticleCard right here
                ))}
            </main>
        </div>
    );
}

export default ArticleListing;