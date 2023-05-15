import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false
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
    }        
    render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            {/* Component Lifecycle challenge:conditionally render the PostItem component
            vs the Loader component based on the state of isLoaded */}
            {this.state.isLoaded ? <PostItem savedPosts={savedPosts}/> : <Loader />}
            
            {/* <Loader />
            <PostItem savedPosts={savedPosts}/> */}
                
            
        </div>
      </div>
    )
  }
}

export default Content