import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { AddArticle } from './AddArticle';
import '../../style.css';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [articleData, setArticleData] = useState('')
	const [addArticle, setAddArticle] = useState(false)


	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function wikiClickHandle(index){//This is used as a click handle for when a user clicks on a certain wiki to get the dtails of the wiki
		try {
			const slug = pages[index].slug
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const article = await response.json();
			setArticleData(article);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		fetchPages();
	}, [articleData, pages]);


	if (articleData == '' && !addArticle){//When the article data empty it renders the landing page with the list of wikis 
		return (
			<main>	
    	  <h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} wikiClickHandle={wikiClickHandle}/>
				<button id='add' onClick={() => setAddArticle(true)}>Add Article</button>
			</main>
		)
	}else if (articleData != ''){//When the article data is not empty it renders the article data onto the page
		return <Article articleData ={articleData} setArticleData = {setArticleData}/>
	}else if(addArticle){
		return <AddArticle setAddArticle = {setAddArticle}/>
	}
}
