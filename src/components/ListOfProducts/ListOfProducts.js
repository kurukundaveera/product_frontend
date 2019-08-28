import React,{Component} from 'react';

import axios from 'axios';

import './ListOfProducts.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import config from '../../config.json';
import loading from './loading.gif';

class ProductGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            list2:[],
            loading: true
        }
    }

    componentDidMount(){
        const{list}=this.state;
        var global=this;
        axios.get(config.url+'/products').then((response)=>{
            console.log(response.data);
            localStorage.setItem("productId",response.data.productId);
        console.log(response.data.productId);
            global.setState({list:response.data,loading:false});
        }).catch((error)=>{
            console.log(error);
        })
    }

    handleClick = (e,item)=> {
        const{list2}=this.state;
        var productId=localStorage.getItem("productId");
        console.log(productId);
        axios.get(config.url+'/product/'+item.productId).then((response)=>{
           console.log(response.data);
           this.setState({list2:response.data});
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleBuyProducts=(e,item)=>{
        localStorage.setItem("productId",item.productId);
        localStorage.setItem("productName",item.productName)
        this.props.history.push('/buyProducts');
    }
    render() {
        let list;
        let list2;

         list2 = this.state.list2.map((item, i) => {
            console.log("item", item)
           return (
                <div>

                            <div><b>PRODUCT DESCRIPTION:</b>{item.productDescription}</div> 
                            <div><b>PRODUCT NAV</b>:{item.productNav}</div>
                            <div><b>BROKERAGE</b>:{item.brokerage}%</div>
                     <Button id="btn7" onClick={(e)=>this.handleBuyProducts(e,item)}>Buy</Button> 
                </div>
            )

        }, this);
        if(this.state.loading){
            list= <div><img align="center" src={loading} alt="loader" width="100px" height="100px"/></div>
        } else{
            list = this.state.list.map((item, i) => {
                console.log("item", item)
                return (
                    <Card>
                        <Accordion.Toggle className="prodheading" id="btn6" onClick={(e) => { this.handleClick(e, item) }} as={Card.Header} eventKey={item.productId}>
                            {item.productName}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.productId}>
                        <Card.Body>
                            {list2}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            }, this); 

        }
             
        return (
            <div >
                <h2>List Of Products</h2>
                <div className="box">
                    <Accordion >
                        {list}
                    </Accordion>
                </div>
            </div>
        )

    }  
}
export default ProductGroup;

