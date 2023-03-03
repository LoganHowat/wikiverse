import React from 'react';

export const Article = ({articleData, setArticleData}) => {
    const published = new Date(articleData.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
	return <>
        <h1>{articleData.title}</h1>
        <p>Author: {articleData.author.name}</p>
        <p>Published: {published}</p>
        <p>Tags:</p>
        {articleData.tags.map((tag) => <li>{tag.name}</li>)}
        <button onClick={() => setArticleData('')}>Back to Wiki</button>
	</>
} 