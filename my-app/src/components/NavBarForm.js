import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';

export class NavBarForm extends Component {
   constructor(props) {
     super(props)
     this.state = {
        isLoggedIn: true
     }
   }

   handleClick = () => {
    this.setState({
        isLoggedIn: false
    });
        console.log(this)
   }
  
    render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
            <button onClick={this.handleClick}>Login</button>
        ) : (
            <form>
                <label for='uname'>Username:</label>
                <input type='text' id='uname' name='uname'></input>
                <label for='pword'>Password:</label>
                <input type='text' id='pword' name='pword'></input>
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )}
        
        
      </div>
    )
  }
}

export default NavBarForm;