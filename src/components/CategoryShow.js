import React, {Component} from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

class CategoriesShow extends Component {

    componentDidMount(){
        this.props.getCategories();

    }

    category = () => {
        return(
            this.props.categories.find(({id}) => id == this.props.match.params.id)
        )
    }

    handleDelete = () =>{
        this.props.deleteItem(this.state.item.id, this.props.history)
    }
    
    renderItems(category){
        return(
            <div>
            <h1>{category.name}</h1>
            <div className= "row row-cols-1 row-cols-md-4 g-4">         
                {category.items.map(item => 
                // <SingleItem current_user={this.props.user} item={item}/>
                <div className="col">
                {item.user ? <div className = "card h-100" key={item.id}>
                    <center><h5>{item.name}</h5></center>
                    <Link to={`/items/${item.id}`}><img src={item.image_url}></img></Link>
                    <p>${item.price}</p>
                    {this.props.user.id == item.user.id? 
                                <div>
                                    <Button size="small" variant="outlined" color="secondary" onClick={(e) => this.handleDelete(item.id, e)} >Delete</Button>
                                </div>
                                : null}                      
                </div>
                : null}
                
            </div>
                )}               
            </div>
        </div>
        )
        
    }
    
    render(){
        return (
            <div>
                {this.category() ? this.renderItems(this.category()): null}
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

//mapstatetoprops gets the state in our redux store, getItems action will dispatch the action we are importing from itemActions, through componentDidMount

export default connect(mapStateToProps, {getCategories})(CategoriesShow)
