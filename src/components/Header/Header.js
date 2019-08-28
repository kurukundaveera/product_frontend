import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import ing from './ing-logo.jpg';
import './Header.css';
import { withTranslation} from 'react-i18next';
class Header extends Component{

send=()=>{
    this.props.history.push('./header');
}
handleSelect = (event) =>{

    let { i18n } = this.props;
    
    i18n.changeLanguage(event.target.value);
    
    }
    render(){
        let { t } = this.props;
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">{t('title')}</h2></li>
                    </ul>
                </div>
            
                <div className="header-right">
                    <Link to='/listOfProducts'><img src={home} className="logo" height="50px" width="50px"/></Link>
                    <Link to='/analysis'><button className="btn btn-outline-primary"><b>{t('dashboard')}</b></button></Link>
                    <Link to='/fileUpload'><button className="btn btn-outline-primary"><b>{t('upload')}</b></button></Link>
                    <select onChange={this.handleSelect}>
                        <option value="en">ENGLISH</option>
                        <option value="sp">SPANISH</option>
                    </select>
                    
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
export default withTranslation()(Header);