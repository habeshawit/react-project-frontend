import React, {useState, useEffect } from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

function CategoriesList(props){

    useEffect(() => {
        props.getCategories();
    });
  
    return (
        <div>
            <div className="categoryNav">
                <p>
                    {props.categories.map(category => 
                    <NavLink to={`/categories/${category.id}`} style={{ textDecoration: 'none', color: 'darkcyan' }}>
                        <>{category.name}      |      </>
                    </NavLink>
                     )}
                </p>
            </div>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

//mapstatetoprops gets the state in our redux store, getItems action will dispatch the action we are importing from itemActions, through componentDidMount

export default connect(mapStateToProps, {getCategories})(CategoriesList)
