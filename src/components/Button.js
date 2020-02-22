import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const Button=()=>{
    return(
    <div>
    <Link to='/Characterpage'>
       <button className='img-button'> <span>Characters Library</span></button>
    </Link>
     <Link to='/'>
       <button className='img-button home'> <span>Welcome Page</span></button>
     </Link>
       <Link to='/'>
       <button className='img-button search'> <span>Search Form</span></button>
       </Link>
       </div>
    
    
    );
}

export default Button;