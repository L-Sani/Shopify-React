import React, { useContext } from 'react';
import { Container, Anchor, Icon } from 'atomize';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/Shop';

function Navbar() {

    const { openCart } = useContext(ShopContext)

    return (
        <>  
            <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
                <Link to="/"><Icon name="HomeSolid" size="20px" color="black500" /></Link>
                <Anchor onClick={() => openCart()}><Icon name="Bag" size="20px" color="black500" /></Anchor>
            </Container>
        </>
    )
}

export default Navbar
