
import React, { Component } from 'react'

import axios from 'axios';
import swal from 'sweetalert'
import config from '../../config.json';
import './BuyProducts.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName:localStorage.getItem("productName"),
            buyProducts:{
                productId:localStorage.getItem("productId"),
                customerName: '',
                mobileNumber: '',
                emailId:'',
                city:'',
                quantity:''

            }
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBuyProduct = this.handleBuyProduct.bind(this)
    }

    handleChange = (event) => {
        const{ buyProducts }=this.state;
        buyProducts[event.target.name]=event.target.value;
        this.setState({buyProducts});

    }

    handleBuyProduct = (e) => {
        e.preventDefault();
        const { buyProducts } = this.state;   
        axios.post(config.json+'/buy',buyProducts).then((response)=>{
            swal("product bought successfully");
            this.props.history.push('/analysis');
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });

    }

    render() {

        return(
            <div className="row">
          <div className="box col-md-6 col-sm-12">
              <h3 align="center" className="h1">Buy Products</h3>
              
              <table align="center" className="table table- striped">
                  <tbody>
              <tr>
                    <td> PRODUCT NAME:</td>
                    <td><input type="text"   value={this.state.productName} id="productName" name="productName" /></td>
                </tr>
                <tr>
                    <td>CUSTOMER NAME:</td>
                    <td><input type="text"  placeholder="Enter the  customer Name"  id="customerName" name="customerName" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    
                    <td>MOBILE NUMBER:</td>
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
                    <td><input type="number"  placeholder="enter the quantity"  id="quantity" name="quantity" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td><button    className="btn btn-primary bbb" id="btn1" onClick={this.handleBuyProduct}>Buy Product</button></td>
                    <td><button   className="btn btn-primary " id="btn2" type="reset"  value="cancel" onClick={this.cancel}>Cancel</button></td>
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