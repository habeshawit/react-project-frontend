// import React from 'react'
// import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom'
// import { fetchCategories } from '../actions/fetchCategories'
// import Itemlist from '../components/old components/Itemlist'
// import ItemForm from '../components/old components/ItemForm'
// import Item from '../components/old components/Item'
// import Categories from '../components/old components/Categories'
// // import CategoryInput from '../components/CategoryInput'


// class ItemlistContainer extends React.Component {


//     componentDidMount() {
//         // 
//         this.props.fetchCategories()
//     }

    
//     //switch will render the first route that matches the given path
//     render(){
//         return(
//             <div>
//                 <Switch> 
//                     {/* <Route path='/items/new' component = {CategoryInput}/> */}

//                     {/* <Route path='/items' render={(routerProps) => <Itemlist {...routerProps} items={this.props.categories}/>} /> */}
//                     <Route path='/items/new' render={(routerProps) => <ItemForm {...routerProps} categories={this.props.categories}/>} />
//                     <Route path='/items/:id' render={(routerProps) => <Item {...routerProps} categories={this.props.categories}/>}/>
//                     <Route path='/items' render={(routerProps) => <Itemlist {...routerProps} categories={this.props.categories}/>} />
//                 </Switch>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         categories: state.categories
//     }
// }

// export default connect(mapStateToProps, {fetchCategories})(ItemlistContainer);