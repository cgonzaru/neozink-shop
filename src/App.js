import React from 'react';
import Header from './components/Header';
import slides from './api/slides.json';
import products from './api/products.json';
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
    return (
      <div className="app">
        <Header />

      </div >
    );
  }
}

export default App;
