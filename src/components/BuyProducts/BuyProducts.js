
import React, { Component } from 'react'

import axios from 'axios';

import './BuyProducts.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyProducts:{
                customerName: '',
                mobileNumber: '',
                emailId:'',
                city:'',
                quantity:''

            }
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }

    handleChange = (event) => {
        const{ buyProducts }=this.state;
        buyProducts[event.target.name]=event.target.value;
        this.setState({buyProducts});

    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const { buyProducts } = this.state;   
        axios.post('',buyProducts).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });

    }

    render() {

        return(
            <div>
          <div className="box">
              <h3 align="center" className="h1">Buy Products</h3>
              <table align="center" className="table table- striped">
                  <tbody>
              <tr>
                    
                    <td>CUSTOMER NAME:</td>
                    <td><input type="text"  placeholder="Enter the  customer Name"  id="customerName" name="customerName" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    
                    <td>CUSTOMER NAME:</td>
                    <td><input type="number"  placeholder="Enter the  mobile number"  id="mobileNumber" name="mobileNumber" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    
                    <td>EMAIL ID:</td>
                    <td><input type="email"  placeholder="Enter the  emailId"  id="emailId" name="emailId" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    
                    <td>CITY:</td>
                    <td><input type="text"  placeholder="Enter the  city"  id="city" name="city" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    
                    <td>QUANTITY :</td>
                    <td><input type="password"  placeholder="enter the quantity"  id="quantity" name="quantity" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td><button   className="btn btn-primary bbb" id="btn1" onClick={this.handleBuyProduct}>Buy Product</button></td>
                    <td><button className="btn btn-primary " id="btn2" type="reset"  value="cancel" onClick={this.cancel}>Cancel</button></td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
        )

    }

}

 

// export default withRouter(withTranslation()(Login));

 

export default Login