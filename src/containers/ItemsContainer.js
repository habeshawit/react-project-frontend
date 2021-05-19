import React from 'react'
import ItemInput from '../components/ItemInput'
import Items from '../components/Items'
import Itemlist from '../components/Itemlist'
import ItemForm from '../components/ItemForm'
import {Route, Switch} from 'react-router-dom'

class ItemsContainer extends React.Component{
    
    render(){
        return (
            <div>
                <ItemInput category_id={this.props.category && this.props.category.id}/>
                <Items items={this.props.category && this.props.category.items}/>
                {/* <Route path='/items/new' render={(routerProps) => <ItemForm {...routerProps} categories={this.props.categories}/>} />
                <Route path='/items' render={(routerProps) => <Itemlist {...routerProps} categories={this.props.categories}/>} /> */}
            </div>
        )
    }

}

export default ItemsContainer;