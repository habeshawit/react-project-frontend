import React from 'react'
import './App.css';
// import { connect } from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer'
import ItemsContainer from './containers/ItemsContainer'
// import {fetchCategories} from './actions/fetchCategories'
// import {fetchItems} from './actions/fetchItems'

class App extends React.Component{

  render(){
     return (
      <div className="App">
        <CategoriesContainer />
        {/* <ItemsContainer /> */}
      </div>
      );
  }
}

//connects react to redux store, automatically calls store.dispatch
// export default connect()(App);
export default App;