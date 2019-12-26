import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import slides from './api/slides.json';
import products from './api/products.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products.data,
      slides: slides.data
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main 
          products={this.state.products}
          slides={this.state.slides}
        />
        <Footer />
      </div >
    );
  }
}

export default App;
