import React from 'react';
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
        <br></br>
        <h1>Welcome to Let'S Trade!</h1>
        <p>..where you can buy and sell items you need</p>
        {props.user.id ? 
            <div><Link to='/items'>View Items for Sale</Link></div> : 
            <div>
                <Link to='/login'>Log In</Link>
                 <br></br>
                <Link to='/signup'>Sign Up</Link>
            </div>
        }
      
    </div>
  );
};

export default Home;