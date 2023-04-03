import React from 'react';
import { supabase } from '../client';
import './CreatePost.css'

const CreatePost = ({posts, setPosts}) => {
    
    const createPost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .insert({title: posts.title, author: posts.author, description: posts.description})
        .select();

        
        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setPosts((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input onChange={handleChange} type="text" id="title" name="title" /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input onChange={handleChange} type="text" id="author" name="author" /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea onChange={handleChange} rows="5" cols="50" id="description" name='description'>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost