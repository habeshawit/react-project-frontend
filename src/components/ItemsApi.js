import React, {Component} from 'react'

export default class ItemsApi extends Component{
    
    state = {
        
        items: []
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            
            .then(data=>this.setState({ 
                items: data
            }))
            .then(json=>console.log(json))
    }

    render() {
        // 
        return(
            
            <div className="container">    
            <h1>Items for Sale</h1>
            <div className ="row row-cols-1 row-cols-md-4 g-4">
                 {this.state.items && this.state.items.length > 0 ? 
                    this.state.items.map(item => {
                        return item
                    }).map(i => 
                        <div className="col">
                            <div className= "card h-100">
                            <h1></h1>
                            <p key={i.id}>{<img src= {i.image} width="250" height="250"/>} </p>
                            <strong><p>{i.title} </p></strong>
                            <p>{i.description}</p>
                            <p>Price: ${i.price}</p>
                            <strong>Category</strong><p>{i.category}</p>
                        </div>
                        </div>
                            )
                        
                        : null}
            </div>
                
                
                
                </div>       
               
        )
    }
}

