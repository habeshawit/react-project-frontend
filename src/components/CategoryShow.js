import React, {Component} from 'react'
// import Categories from './Categories';
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import SingleItem from '../components/SingleItem'

class CategoriesShow extends Component {

    componentDidMount(){
        // this.props.getCategory(this.props.match.params.id);
        this.props.getCategories();

    }

    // category = (category) =>{
    //     return(
    //         this.props.categories.items.find(({id}) => id === props.match.params.id)
    //     )
    // }

   
    // category = () =>{
    //     this.props.categories.length > 0 && this.props.categories.filter((category, i) => {
    //         return(
    //             category.items.find(({id}) => id === this.props.match.params.id)
    //         )
    //     },this)
    //     
    // }

    category = () => {
        return(
            this.props.categories.find(({id}) => id == this.props.match.params.id)
        )
    }
    
    renderItems(category){
        return(
            <div className="container">
            <h1>{category.name}</h1>
            <div className= "row row-cols-1 row-cols-md-4 g-4">         
                {category.items.map(item => <SingleItem current_user={this.props.user} item={item}/>)}               
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
