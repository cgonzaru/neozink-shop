import React from 'react';
import logo from '../resources/logo.png';
import '../css/elements/_footer.scss';

const Footer = props => {

	return (
		<footer class="footer">
			<p><img src={logo} alt="Neoshop" title="Neoshop" /></p>
			<p>Prueba técnica para candidatos</p>
		</footer>
	);

};

export default Footer;