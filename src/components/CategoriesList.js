import React, {Component} from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class CategoriesList extends Component {

    componentDidMount(){
        this.props.getCategories();
        console.log(this.props.categories);
    }
   
    render(){
        return (
            <div>
                <div className="categoryNav">
                    <p>
                        {this.props.categories.map(category => 
                        <NavLink to={`/categories/${category.id}`} style={{ textDecoration: 'none', color: 'darkcyan' }}>
                            <>{category.name}      |      </>
                        </NavLink>
                        )}
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
