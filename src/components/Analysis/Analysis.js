import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
          axios.get('http://10.117.189.127:9090/bankproduct/api/analysys/daily').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      getWeeklyAnalysis = () => {
       
        return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.127:9090/bankproduct/api/analysys/Weekly').then((response)=> {
        resolve(response);
      console.log(response);
      }).catch((error)=> {
        reject(error);
      });
    });
  }
  getMonthlyAnalysis = () => {
       
    return new Promise((resolve, reject) => {
  axios.get('http://10.117.189.127:9090/bankproduct/api/analysys/monthly').then((response)=> {
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
      <div>
          <h4>DAILY ANALYSIS</h4>
      <BarChart
        width={500}
        height={300}
        data={this.state.dailyAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="productId" fill="#8884d8" />
      </BarChart>
      </div>
      <div>
          <h4>WEEKLY ANALYSIS</h4>
      <BarChart
        width={500}
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
        <Bar dataKey="productId" fill="#8884d8" />
      </BarChart>
      </div>
      <div>
          <h4>MONTHLY ANALYSIS</h4>
      <BarChart
        width={500}
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
        <Bar dataKey="productId" fill="#8884d8" />
      </BarChart>
      </div>
      </div>
    );
  }
}