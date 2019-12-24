import React from 'react';
import slides from './api/slides.json';
import products from './api/products.json';
import logo from './resources/logo.png';
import './css/elements/_header.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products.data,
      slides: slides.data
    }
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="app">
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

      </div >
    );
  }
}

export default App;
