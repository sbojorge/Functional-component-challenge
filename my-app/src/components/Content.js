import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';


export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: []
      }
    }
    updateState() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }
    componentDidMount() {
        this.updateState()
        this.setState({
            posts:savedPosts
        })
    }
    handleSearch = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts:filteredPosts
        })
    }       
    render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor='searchInput'>Search</label>
                <input onChange={(event) =>this.handleSearch(event)} type='search' id='searchInput' placeholder='By Author' />
                <h4>posts found:{this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {/* Component Lifecycle challenge:conditionally render the PostItem component
            vs the Loader component based on the state of isLoaded */}
            {this.state.isLoaded ? <PostItem savedPosts={this.state.posts}/> : <Loader />}
            
            {/* <Loader />
            <PostItem savedPosts={savedPosts}/> */}
                
            
        </div>
      </div>
    )
  }
}

export default Content