import React, {useEffect } from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import Button from '@material-ui/core/Button';


function CategoriesList(props){

    useEffect(() => {
        props.getCategories();
    },[]);
  
    return (
        <div>
            <div className="categoryNav">
                {/* <p> */}
                    {props.categories.map(category => 
                   <Button> 
                        <NavLink key={category.id} to={`/categories/${category.id}`} style={{ textDecoration: 'none', color: 'darkcyan' }}>
                            <div className="cat">{category.name} </div>
                        </NavLink>
                    </Button>
                     )}
                {/* </p> */}
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
