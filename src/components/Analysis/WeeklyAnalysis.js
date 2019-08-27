import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

export default class weeklyAnalysis extends PureComponent {
    constructor() {
        super()
        this.state  = {
            weeklyAnalysis : []
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ weeklyAnalysis:response.data });
        });
    
    
      }
    getData = () => {
       
       
        return new Promise((resolve, reject) => {
          axios.get('http://10.117.189.127:9090/bankproduct/api/analysys/week').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
  debugger; 
  render() {
    return (
        <div ><h1>Treanding stocks</h1>
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
    );
  }
}