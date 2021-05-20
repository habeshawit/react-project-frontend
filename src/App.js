import React from 'react'
import './App.css';
import Itemlist from './components/Itemlist';
import ItemlistContainer from './containers/ItemlistContainer';
// import { connect } from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer'
import ItemsContainer from './containers/ItemsContainer'
// import {fetchCategories} from './actions/fetchCategories'
// import {fetchItems} from './actions/fetchItemlists'
import {Switch, Route} from 'react-router-dom'
import Home2 from './components/Home2'
import ItemsList from './components/ItemsList'
import ItemsForm from './components/ItemsForm'

//comment back
// class App extends React.Component{

//   render(){
//      return (
//       <div className="App">
//         <CategoriesContainer />
//         {/* <ItemsContainer /> */}
//         <ItemlistContainer/>
//       </div>
//       );
//   }
// }

//ROUTS I NEED:
// /Items
// /items/new
// /items/api
// /items/:id


function App(){
  return(
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home2}/>
        <Route exact path='/items' component={ItemsList}/>
        <Route path='/items/new' component={ItemsForm}/>
      </Switch>
      
    </div>
  )
}


//connects react to redux store, automatically calls store.dispatch
// export default connect()(App);
export default App;