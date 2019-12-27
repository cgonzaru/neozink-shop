import React from 'react';
import PropTypes from 'prop-types';
import slide1 from '../resources/slider/slide1.jpg';
import slide2 from '../resources/slider/slide2.jpg';
import slide3 from '../resources/slider/slide3.jpg';
import slide4 from '../resources/slider/slide4.jpg';
import vans1 from '../resources/products/vans1.png';
import vans2 from '../resources/products/vans2.png';
import vans3 from '../resources/products/vans3.png';
import vans4 from '../resources/products/vans4.png';
import vans5 from '../resources/products/vans5.png';
import vans6 from '../resources/products/vans6.png';
import vans7 from '../resources/products/vans7.png';
import vans8 from '../resources/products/vans8.png';
import cta1mod from '../resources/cta/cta1mod.jpg';
import cta2mod from '../resources/cta/cta2mod.jpg';
import '../css/elements/_slider.scss';
import '../css/elements/_products.scss';
import '../css/elements/_button.scss';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Row, Col } from 'react-grid-system';

const Main = props => {
	const { products, slides } = props;
	const title = slides.map(item => item.title);
	const price = products.map(item => item.price);
	const name = products.map(item => item.name);
	const button_text = products.map(item => item.button_text);

	return (
		<main className="main">
			<div className="wrapper">
				<div className="slider">
					<CarouselProvider
						naturalSlideWidth={1920}
						naturalSlideHeight={624}
						totalSlides={4}
					>
						<Slider>
							<Slide index={0}>
								<img src={slide1} alt="slide1" className="container-slide" />
								<div className="text-slide">{title[0]}</div>
								<button className="btn-slide">Comprar</button>
							</Slide>
							<Slide index={1}>
								<img src={slide2} alt="slide2" className="container-slide" />
								<div className="even-text">{title[1]}</div>
								<button className="even-btn">Comprar</button>
							</Slide>
							<Slide index={2}>
								<img src={slide3} alt="slide3" className="container-slide" />
								<div className="text-slide">{title[2]}</div>
								<button className="btn-slide">Comprar</button>
							</Slide>
							<Slide index={3}>
								<img src={slide4} alt="slide4" className="container-slide" />
								<div className="even-text">{title[3]}</div>
								<button className="even-btn">Comprar</button>
							</Slide>
						</Slider>
					</CarouselProvider>
				</div>
				<div className="main__products">
					<h2 className="products-title">productos</h2>
					<div className="products-container">
						<Container>
							<Row className="row-container">
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans1} alt="vans1" className="vans-img" />
										<div className="vans">
											<div className="vans-text">{name[0]}</div>
											<div className="price">{price[0]}</div>
										</div>
										<button className="vans-btn button">{button_text[0]}</button>
									</div>
								</Col>
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans2} alt="vans2" className="vans-img" />
										<div className="vans">
											<div className="vans-text">{name[1]}</div>
											<div className="price">{price[1]}</div>
										</div>
										<button className="vans-btn button">{button_text[1]}</button>
									</div>
								</Col>
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans3} alt="vans3" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[2]}</div>
											<div className="price">{price[2]}</div>
										</div>
										<button className="vans-btn button">{button_text[2]}</button>
									</div>
								</Col>
							</Row>
							<Row className="row-container">
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans4} alt="vans4" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[3]}</div>
											<div className="price">{price[3]}</div>
										</div>
										<button className="vans-btn button">{button_text[3]}</button>
									</div>
								</Col>
								<Col sm={8}>
									<div className="vans-container">
										<img src={cta1mod} alt="cta1mod" className="cta" />
									</div>
								</Col>

							</Row>
							<Row className="row-container">
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans5} alt="vans5" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[4]}</div>
											<div className="price">{price[4]}</div>
										</div>
										<button className="vans-btn button">{button_text[4]}</button>
									</div>
								</Col>
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans6} alt="vans6" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[5]}</div>
											<div className="price">{price[5]}</div>
										</div>
										<button className="vans-btn button">{button_text[5]}</button>
									</div>
								</Col>
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans7} alt="vans7" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[6]}</div>
											<div className="price">{price[6]}</div>
										</div>
										<button className="vans-btn button">{button_text[6]}</button>
									</div>
								</Col>
							</Row>
							<Row className="row-container">
								<Col sm={8}>
									<div className="vans-container">
										<img src={cta2mod} alt="cta2mod" className="cta" />
									</div>
								</Col>
								<Col sm={4}>
									<div className="vans-container">
										<img src={vans8} alt="vans8" className="vans-img" />
										<div className="vans">
										<div className="vans-text">{name[7]}</div>
											<div className="price">{price[7]}</div>
										</div>
										<button className="vans-btn button">{button_text[7]}</button>
									</div>
								</Col>

							</Row>
						</Container>
					</div>

				</div>
				<div className="load">

					<span className="load__button button">Cargar más productos</span>
				</div>
			</div>
		</main >
	);

};

Main.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	slides: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Main;