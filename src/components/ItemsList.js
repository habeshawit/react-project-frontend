import React, {Component} from 'react'
import Categories from './Categories';
import {getItems} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import SingleItem from '../components/SingleItem'

class ItemsList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    
    render(){
        return (
            <div>
                <h1>
                    ItemsList 2
                    
                </h1>
                <div className="container">
                    <div className= "row row-cols-1 row-cols-md-4 g-4">
                    {this.props.items.map(item => <SingleItem item={item}/>)}
                </div>
                </div>
                
                
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

//mapstatetoprops gets the state in our redux store, getItems action will dispatch the action we are importing from itemActions, through componentDidMount

export default connect(mapStateToProps, {getItems})(ItemsList)
