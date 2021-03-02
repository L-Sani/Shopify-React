import React, { useContext, useEffect } from 'react';
import { Container, Text, Div, Row, Col } from 'atomize';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { ShopContext } from '../context/Shop';
import Loading from '../components/Loading';
import { data } from '../context/Data';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
        return () => {
            
        }
    }, [fetchAllProducts])

    if(!products) return <Loading />
    return (
        <Container>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            >
                { data.map( image => (
                    <SwiperSlide key={image.id}>
                        <Div 
                        h="30rem" 
                        bgPos="center center" 
                        bgImg={image.img} 
                        bgSize="cover" 
                        rounded="lg"
                        m={{ y: "3.5rem" }}
                        d="flex"
                        align="center"
                        justify="center"
                        >
                            <Text 
                            tag="h1" 
                            textWeight="400" 
                            textSize="display3" 
                            textDecor="none" 
                            textColor={image.textColor} 
                            // textAlign="center"
                            >
                                {image.text}
                            </Text>
                        </Div>
                    </SwiperSlide>
                )) }
            </Swiper>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size={{ xs: 12, md: 6, lg: 4 }} >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p={{ lg: "2rem" }}>
                                <Div 
                                h="20rem"
                                bgImg={product.images[0].src}
                                bgSize="cover"
                                bgPos="center"
                                shadow="3"
                                hoverShadow="4"
                                transition="0.3s"
                                m={{ b: "1.5rem" }}
                                rounded="lg"
                                >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home
