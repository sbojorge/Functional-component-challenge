import React, {useState, useEffect} from 'react'
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const[isLoaded, setIsLoaded ] = useState(false);
    const[fetchedPosts, setFetchedPosts] = useState([]);
    useEffect(()=>{
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts) 
        }, 2000);
        
    }, []);
    const handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        setFetchedPosts(filteredPosts)
    }     
    return (
        <div className={css.Content}>
          <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                  <label htmlFor='searchInput'>Search</label>
                  <input onChange={(event) =>handleChange(event)} type='search' id='searchInput' placeholder='By Author' />
                  <h4>posts found:{fetchedPosts.length}</h4>
              </form>
          </div>
          <div className={css.SearchResults}>
              {/* Component Lifecycle challenge:conditionally render the PostItem component
              vs the Loader component based on the state of isLoaded */}
              {isLoaded ? <PostItem savedPosts={fetchedPosts}/> : <Loader />}
              
              {/* <Loader />
              <PostItem savedPosts={savedPosts}/> */}
                  
              
          </div>
        </div>
      )
}

export default ContentHooks