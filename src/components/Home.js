import React from 'react'


const Home = (props) => {
    
    return (
        <div>
           <h1>
               HELLO
               {props.categories? props.categories.first.name: null}
            </h1> 
        </div>
    )
}

export default Home;