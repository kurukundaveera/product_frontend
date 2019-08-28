import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import config from '../../config.json';

import axios from 'axios';

export default class DailyAnalysis extends PureComponent {
    constructor() {
        super()
        this.state  = {
            dailyAnalysis : [],
            WeeklyAnalysis:[],
            monthlyAnalysis:[]

        }
    }
    componentDidMount() {
     
        this.getDailyAnalysis().then(response => {
            console.log(response.data)
          this.setState({ dailyAnalysis: response.data });
        });
       
        this.getWeeklyAnalysis().then(response => {
            console.log(response.data)
          this.setState({ weeklyAnalysis: response.data });
        });

        this.getMonthlyAnalysis().then(response => {
            console.log(response.data)
          this.setState({ monthlyAnalysis: response.data });
        });
    
    
      }
    getDailyAnalysis = () => {
       
            return new Promise((resolve, reject) => {
          axios.get(config.url+'/analysys/daily').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      getWeeklyAnalysis = () => {
       
        return new Promise((resolve, reject) => {
      axios.get(config.url+'/analysys/Weekly').then((response)=> {
        resolve(response);
      console.log(response);
      }).catch((error)=> {
        reject(error);
      });
    });
  }
  getMonthlyAnalysis = () => {
       
    return new Promise((resolve, reject) => {
  axios.get(config.url+'/analysys/monthly').then((response)=> {
    resolve(response);
  console.log(response);
  }).catch((error)=> {
    reject(error);
  });
});
}
 
  render() {
    return (
        <div ><h1>MUTUAL FUND ANALYSIS </h1>
      <div align="center">
          <h4>DAILY ANALYSIS</h4>
      <BarChart
        width={700}
        height={300}
        data={this.state.dailyAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#010D3E" />
      </BarChart>
      </div>
      <div align="center">
          <h4>WEEKLY ANALYSIS</h4>
      <BarChart
        width={700}
        height={300}
        data={this.state.weeklyAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#010D3E" />
      </BarChart>
      </div>
      <div align="center">
          <h4>MONTHLY ANALYSIS</h4>
      <BarChart
        width={700}
        height={300}
        data={this.state.monthlyAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#010D3E" />
      </BarChart>
      </div>
      </div>
    );
  }
}