import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import ing from './ing-logo.jpg';
import './Header.css';

class Header extends Component{

send=()=>{
    this.props.history.push('./header');
}

    render(){
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">ING Products OverView Screen</h2></li>
                    </ul>
                </div>
            
                <div className="header-right">
                    <Link to='/productGroup'><img src={home} className="logo" height="50px" width="50px"/></Link>
                    <Link to='/graph'><button className="btn btn-outline-primary"><b>Dashboard</b></button></Link>
                    <Link to='/fileUpload'><button className="btn btn-outline-primary"><b>UPLOAD</b></button></Link>
                    
               </div>
        
                {/* <div id="mySidenav" className="sidenav">
                  <Link to="/logout"><button className="btn btn-outline-primary">LOGOUT</button> </Link>
                </div> */}
                <div>
                    <marquee className="slide">ING the SAFER-BANK</marquee>
                </div>
            </div>
        )
    }
}
export default Header;