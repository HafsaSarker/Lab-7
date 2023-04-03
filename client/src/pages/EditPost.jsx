import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'

const EditPost = ({allPosts}) => {

    let {id} = useParams();
    let num = parseInt(id);
    //console.log(id);
    
    const postEdit = allPosts.filter((item) => item.id === num)[0];

    console.log(postEdit)
    
    return (
        <div>
            {postEdit ? 
            (
                <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={postEdit.title} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={postEdit.author} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={postEdit.description} >
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