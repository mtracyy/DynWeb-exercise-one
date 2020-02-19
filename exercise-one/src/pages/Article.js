import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DATA from '../components/Data';
import ArticleItem from '../components/ArticleItem'

function Article() {
    const [article, setArticle] = useState({}); //defining the functions here; they're from useState
    let { id } = useParams();

    useEffect(() => { //setting the data
        let dataArray = DATA.filter(articleData => articleData.id === id);
        // DATA.filter((article) => (article.id !== id)); //this is same as above

        setArticle(dataArray[0]);
    }, [id]);
    //every time [id] updates, we run useEffect

    console.log("data", DATA);


    return (
        <div>
            <header className="articleHeader" style={{
                backgroundImage: `url(${ article.image ? article.image.url : ""})` //if article image true, then article.image.url, else ""
                // when page is first rendered data is not yet set; article is just an empty object {}
            }}>
                <div className="articleHeaderWrapper">
                    <h1>{article.title}</h1>
                    <p>{article.publishedDate}</p>
                    <p>{article.blurb}</p>
                </div>
            </header>

            <main className="articleContent">
                <div className="articleContentWrapper">
                    {/*{article.articleText && article.articleText.map((text, i) => <p key={i}>{text.data}</p>) }*/}

                    {article.articleText && article.articleText.map((text, i) => (
                        <ArticleItem key={i} data={text.data} type={text.type}/>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Article;