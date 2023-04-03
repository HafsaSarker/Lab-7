import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditPost.css'

const EditPost = ({allPosts}) => {   
    let {id} = useParams();
    let num = parseInt(id);
    
    const postEdit = allPosts.filter((item) => item.id === num)[0];

    const [edits, setEdits] = useState({
        title: postEdit.title,
        author: postEdit.author,
        description: postEdit.description
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setEdits((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const updatePost = async(event) => {
        event.preventDefault();
        
        await supabase
            .from('Posts')
            .update({title: edits.title, author: edits.author,  description: edits.description})
            .eq('id', id);
        window.location = "/";
    }
    
    return (
        <div>
            {postEdit ? 
            (
                <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input onChange={handleChange} type="text" id="title" name="title" value={edits.title} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input onChange={handleChange} type="text" id="author" name="author" value={edits.author} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea onChange={handleChange} rows="5" cols="50" 
                name='description'
                id="description" value={edits.description} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton">Delete</button>
            </form>
            ): null
            }
            
        </div>
    )
}

export default EditPost