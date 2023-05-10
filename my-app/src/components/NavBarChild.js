import React from 'react';

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <button onClick={props.handleClick}>Login</button>
        :
        <form>
            <label htmlFor='uname'>Username:</label>
            <input id='uname' placeholder='username' />
            <label htmlFor='pword'>Password:</label>
            <input id='pword' placeholder='password' />
            <button onClick={props.handleClick}>Submit</button>
        </form>
        
    )
    
        

    
    

}

export default NavBarChild;
