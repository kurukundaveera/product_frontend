import React,{Component,lazy,Suspense} from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
 import Header from './components/Header/Header';
 import FileUpload from './components/FileUpload/FileUpload';
import  BuyProducts from './components/BuyProducts/BuyProducts';
//import Analysis from './components/Analysis/Analysis';
 import ListOfProducts from './components/ListOfProducts/ListOfProducts';
 const Analysis = lazy(()=>import ('./components/Analysis/Analysis'));


class  App extends Component{
  render(){
    return (
      <div className="App">
        <HashRouter>
          <Header/>
           <Route path="/fileUpload" component={FileUpload}/>
           <Route path="/listOfProducts" component={ListOfProducts}/>
          <Route path="/buyProducts" component={BuyProducts}/>
          <Suspense fallback={<div>LOADING.......</div>}>
          <Route path="/analysis" component={Analysis}/> 
          </Suspense>
         </HashRouter>
     
       
      </div>
    );

  }
  
}

export default App;

