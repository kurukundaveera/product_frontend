import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import FileUpload from './components/FileUpload/FileUpload';
import  BuyProducts from './components/BuyProducts/BuyProducts';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/fileUpload" component={FileUpload}/>
        <Route path="/buyProducts" component={BuyProducts}/>
       </HashRouter>
   
     
    </div>
  );
}

export default App;

