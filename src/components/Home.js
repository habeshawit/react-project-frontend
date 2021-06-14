import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

function Home (props) {
  return (
    
    <div>
        <div className="jumbotron2"></div>
          <div className="home-container">
            <h1>Welcome to Simple Sales</h1> 
            <p>Moving or simply looking for a change? Buy and sell furniture the easy way...</p>   
              <div>
                <br></br>
                  {props.user.id ? 
                    <div>          
                      <Button variant="contained" color="default"><NavLink to='/items'>Buy</NavLink></Button>
                      <Button variant="contained" color="default"><NavLink to='/items/new'>Sell</NavLink></Button>
                    </div> : 
                    <div>          
                      <Button variant="contained" color="default"><NavLink to='/login'>Get Started</NavLink></Button>
                    </div>
                  } 
          </div>
        </div>
    </div>
   
  );
};

export default Home;