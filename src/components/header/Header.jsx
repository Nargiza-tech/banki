import React from 'react';
import logo from '../../Image/logo.svg';
import classes from './header.module.css';


class Header extends React.Component{
	render(){
		return(
			<div className={classes.header}>
				<div className={classes.navigation}>
					<div className="row align-items-center">
						<div className="col mx-3">
							<a href="#"><img  src={logo} className="px-2" alt="logo"/></a>
						</div>
						<div className="col d-none d-md-block text-end fs-5 me-3">
							<a className="me-3" href="#">ГЛАВНАЯ</a>
							<a className="me-3" onClick="document.getElementById('container-for-bank').scrollIntoView();">БАНКИ</a>
							<a href="#">КОНТАКТЫ</a>
						</div>
					</div>
				</div>
			</div>
		)  
	}
}

export default Header;