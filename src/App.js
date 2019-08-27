import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import FileUpload from './components/FileUpload/FileUpload';
import  BuyProducts from './components/BuyProducts/BuyProducts';
import ListOfProducts from './components/ListOfProducts/ListOfProducts';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/fileUpload" component={FileUpload}/>
        <Route path="/listOfProducts" component={ListOfProducts}/>
        <Route path="/buyProducts" component={BuyProducts}/>
       </HashRouter>
   
     
    </div>
  );
}

export default App;

