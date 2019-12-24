import React from 'react';
import logo from '../resources/logo.png';

const Header = props => {

	return (
		<header className="header">
			<div className="header__logo">
				<img src={logo} alt="Neoshop" title="Neoshop" />
			</div>
			<div className="header__shop shop">
				<a href="#" className="shop__button">
					<span className="shop__icon"><i className="fas fa-shopping-cart"></i></span>
					<span className="shop__text">Carrito</span>
				</a>
				<a href="#" className="shop__button">
					<span className="shop__icon"><i className="fas fa-user"></i></span>
					<span className="shop__text">Mi perfil</span>
				</a>
				<a href="#" className="shop__button">
					<span className="shop__icon"><i className="fas fa-box-open"></i></span>
					<span className="shop__text">Mis pedidos</span>
				</a>
			</div>
		</header>
	);

};

export default Header;