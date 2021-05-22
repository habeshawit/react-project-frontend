import React, {Component} from 'react'
// import Categories from './old components/Categories';
import {getItems} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import SingleItem from '../components/SingleItem'
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


class ItemsList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    
    render(){
        return (
            <div>
        
                <div>
                    
                    <br></br>
                    <h1>Welcome to Simple Sales</h1>
                    {this.props.user.id ? 
                        null : 
                        <div>
                            <Button size="small" variant="outlined" color="secondary"><Link to='/login'>Log In</Link></Button> | | 
                            <Button size="small" variant="outlined" color="secondary"><Link to='/signup'>Sign Up</Link></Button>     
                        </div>
                    }      
                    <div>
                        <CategoriesList />                  
                    </div>
                    <div className= "row row-cols-1 row-cols-md-4 g-4">
                        {this.props.items.map(item => <SingleItem current_user={this.props.user} item={item}/>)}
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
