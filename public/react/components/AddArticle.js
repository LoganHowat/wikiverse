import React, {useState} from 'react';
import apiURL from '../api';
import '../../style.css';


export const AddArticle = ({setAddArticle}) => {
    setAddArticle(true)

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState('');


    async function handleSubmit(event){
        event.preventDefault();
        const articleDataToSend = {
            title: title,
            content: content,
            name: name,
            email: email,
            tags: tags
        }
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              articleDataToSend // our data TO CREATE here
            )
        });
        setAddArticle(false)
    }

    function handleTitle(event){
        setTitle(event.target.value)
    }
    function handleContent(event){
        setContent(event.target.value)
    }
    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleTags(event){
        setTags(event.target.value)
    }

	return <div>
        <h2>Add a Page</h2><br/>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' onChange={handleTitle}/><br></br>
            <input type='text' placeholder='Content' onChange={handleContent}/><br></br>
            <input type='text' placeholder='Name' onChange={handleName}/><br></br>
            <input type='text' placeholder='Email' onChange={handleEmail}/><br></br>
            <input type='text' placeholder='Tags' onChange={handleTags}/><br></br>
            <br/><button type='submit' id='add'>Create Page</button>
	    </form>
    </div>
} 