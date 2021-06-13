import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

function Home (props) {
  return (
    
    <div className="container-full-bg">

        <div className="jumbotron2"></div>
          <br></br>
          <div className="home-container">
            <h1>Welcome to Simple Sales</h1> 
            <p>Looking for a change? Buy and sell furniture the easy way...</p>   
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
              {/* <div className="row">
                <div className="col">
                  <br></br>
                  <h3 ><NavLink to='/items' style={{ textDecoration: 'none'}}>View Items</NavLink></h3>
                </div>
                      
                <div className="col">
                  <br></br>
                    <h3 ><NavLink to='/items/new' style={{ textDecoration: 'none'}}>Post an item</NavLink></h3>
                </div>
              </div> */}
          </div>
        </div>
        {/* </div> */}
    </div>
   
  );
};

export default Home;