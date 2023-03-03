import React from 'react';
import apiURL from '../api';
import '../../style.css';


export const Article = ({articleData, setArticleData}) => {
    
    async function handleDelete(){
        const response = await fetch(`${apiURL}/wiki/${articleData.slug}`, {
          method: "DELETE"
        });
        setArticleData('')
    }
    
    const published = new Date(articleData.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
	return <div>
        <section id='articleSection'>
            <h1>{articleData.title}</h1><br/>
            <p><span class="bolded">Author:</span> {articleData.author.name}</p><br/>
            <p><span class="bolded">Published:</span> {published}</p><br/>
            <p><span class="bolded">Tags:</span></p><br/>
            {articleData.tags.map((tag) => <li>{tag.name}</li>)}<br/>
            <button id='delete' onClick={() => handleDelete()}>DELETE</button> 
            <button id='back' onClick={() => setArticleData('')}>Back to Wiki</button>
        </section>
	</div>
} 