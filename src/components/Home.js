import React from 'react';
// import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import {NavLink, Link} from 'react-router-dom'



const divStyle = {
  color: 'blue',
  backgroundImage: 'url(https://www.groovypost.com/wp-content/uploads/2019/12/sell-items-online-sale-featured-1000x450.jpg)',
};


const Home = (props) => {
  return (
    <div>
        
<div className="container">
    <div className="jumbotron2">
      <div className="container">
        <br></br>
      <h1>Welcome to Simple Sales</h1>
      </div>
      
    </div>
    <div>
    <div class="center">
    <br></br>
                    {props.user.id ? 
                        null : 
                        <div>
                          
                            <Button size="small" variant="contained" color="default"><NavLink to='/login'>Log In</NavLink></Button> | | 
                            <Button size="small" variant="contained" color="default"><NavLink to='/signup'>Sign Up</NavLink></Button>     
                        </div>
                    } 
      <div className="row">

        <div className="col">
          <br></br>
          <h3 ><NavLink to='/items' style={{ textDecoration: 'none'}}>View Items</NavLink></h3>
        </div>
          
        <div className="col">
          <br></br>
          <h3 ><NavLink to='/items/new' style={{ textDecoration: 'none'}}>Post an item</NavLink></h3>
        </div>
      </div>
    </div>
  </div>
  </div>

{/*  
 <div className="jumbotron">

  <h1>Welcome to Simple Sales</h1>
                    {props.user.id ? 
                        null : 
                        <div>
                            <Button size="small" variant="outlined" color="secondary"><Link to='/login'>Log In</Link></Button> | | 
                            <Button size="small" variant="outlined" color="secondary"><Link to='/signup'>Sign Up</Link></Button>     
                        </div>
                    }     
</div>
 */}

 {/* </div> */}
      
    </div>

    
  );
};

export default Home;