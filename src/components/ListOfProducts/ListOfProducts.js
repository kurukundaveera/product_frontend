import React,{Component} from 'react';

import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './ListOfProducts.css';

class ProductGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            list2:[]
        }
    }

    componentDidMount(){
        const{list}=this.state;
        var global=this;
        axios.get('http://10.117.189.127:9090/bankproduct/api/products').then((response)=>{
            console.log(response.data);
            global.setState({list:response.data});
        }).catch((error)=>{
            console.log(error);
        })
    }

    handleClick = (item)=> {
        const{list2}=this.state;
        axios.get('http://10.117.189.127:9090/bankproduct/api/product/'+item.productId).then((response)=>{
           console.log(response.data);
           this.setState({list2:response.data});
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleBuyProducts=(item1)=>{
        localStorage.setItem("productId",item1.productId);
        localStorage.setItem("productName",item1.productName)
        this.props.history.push('/buyProducts');
    }

    render(){
        console.log(this.state.list)
        return(
          <div  className="box">
            {this.state.list.map((item,i)=>{
                return(
                      <Accordion key={i}>
                        <AccordionItem>
                            <AccordionItemHeading onClick={()=>this.handleClick(item)}>
                                <AccordionItemButton>
                                    {item.productName}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    {this.state.list2.map((item1,j)=>{
                                        return(
                                            <AccordionItemPanel key={j}>
                                           <div><b>PRODUCT DESCRIPTION:</b>{item1.productDescription}</div> 
                                            <div><b>PRODUCT NAV</b>:{item1.productNav}</div>
                                            <div><b>BROKERAGE</b>:{item1.brokerage}%</div>
                                            <button className="btn  btn-outline-primary"  onClick={()=>this.handleBuyProducts(item1)}>Buy</button>
                                            </AccordionItemPanel>
                                        )
                                    })}
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    
                    </Accordion>
                    )
                })}
            </div>
        )
    }
}
export default ProductGroup;