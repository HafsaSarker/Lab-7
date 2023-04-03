import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = ({allPosts, setAllPosts}) => {

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .order('created_at', { ascending: true })
      
              setAllPosts(data);
        }
        fetchPosts();  
    }, [allPosts]);
    
    return (
        <div className="ReadPosts">
            {
                allPosts && allPosts.length > 0 ?
                allPosts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;