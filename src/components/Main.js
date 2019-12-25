import React from 'react';
import slide1 from '../resources/slider/slide1.jpg';
import slide2 from '../resources/slider/slide2.jpg';
import slide3 from '../resources/slider/slide3.jpg';
import slide4 from '../resources/slider/slide4.jpg';
import '../css/elements/_slider.scss';
import '../css/elements/_products.scss';
import '../css/elements/_button.scss';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Main = props => {
	const { products, slides } = props;

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
							<div className="text-slide">Título para la primera slide</div>
							<button className="btn-slide">Comprar</button>
						</Slide>
						<Slide index={1}>
							<img src={slide2} alt="slide2" className="container-slide" />
							<div className="even-text">Título para la segunda slide</div>
							<button className="even-btn">Comprar</button>
						</Slide>
						<Slide index={2}>
							<img src={slide3} alt="slide3" className="container-slide" />
							<div className="text-slide">Título para la tercera slide</div>
							<button className="btn-slide">Comprar</button>
						</Slide>
						<Slide index={3}>
							<img src={slide4} alt="slide4" className="container-slide" />
							<div className="even-text">Título para la cuarta slide</div>
							<button className="even-btn">Comprar</button>
						</Slide>
					</Slider>
					</CarouselProvider>
				</div>
				<div className="products">

				</div>
				<div className="load">
					
					<span className="load__button button">Cargar más productos</span>
				</div>
			</div>
		</main >
	);

};

export default Main;