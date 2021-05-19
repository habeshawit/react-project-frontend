import React from 'react'
import ItemInput from '../components/ItemInput'
import Items from '../components/Items'
import AllItems from '../components/Items'
import {Route, Switch} from 'react-router-dom'

class ItemsContainer extends React.Component{
    
    render(){
        return (
            <div>
                <ItemInput category_id={this.props.category && this.props.category.id}/>
                <Items items={this.props.category && this.props.category.items}/>
                {/* <AllItems items={this.props.items}/> */}
                {/* <Route path='/items' render={() => <AllItems items={this.props}/>} /> */}
            </div>
        )
    }

}

export default ItemsContainer;