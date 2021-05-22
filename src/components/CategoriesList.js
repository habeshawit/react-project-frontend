import React, {Component} from 'react'
// import Categories from './Categories';
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import SingleCategory from '../components/SingleCategory'


class CategoriesList extends Component {

    componentDidMount(){
        this.props.getCategories();
        console.log(this.props.categories);
    }

    
    render(){
        // 
        return (
            <div>
                <div className="categoryNav">
                    <p>
                        {this.props.categories.map(category => <SingleCategory category={category}/>)}
                    </p>
                </div>
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

export default connect(mapStateToProps, {getCategories})(CategoriesList)
