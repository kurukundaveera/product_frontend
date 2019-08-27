import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import FileUpload from './components/FileUpload/FileUpload';
import  BuyProducts from './components/BuyProducts/BuyProducts';
import ListOfProducts from './components/ListOfProducts/ListOfProducts';
import DailyAnalysis from './components/Analysis/DailyAnalysis';
import WeeklyAnalysis from './components/Analysis/WeeklyAnalysis';
import MonthlyAnalysis from './components/Analysis/MonthlyAnalysis';
import Analysis from './components/Analysis/Analysis';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/fileUpload" component={FileUpload}/>
        <Route path="/listOfProducts" component={ListOfProducts}/>
        <Route path="/buyProducts" component={BuyProducts}/>
        <Route path="/dailyAnalysis" component={DailyAnalysis}/>
        <Route path="/weeklyAnalysis" component={WeeklyAnalysis}/>
        <Route path="/monthlyAnalysis" component={MonthlyAnalysis}/>
        <Route path="/analysis" component={Analysis}/>
       </HashRouter>
   
     
    </div>
  );
}

export default App;

