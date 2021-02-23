import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
    domain: "graphql.myshopify.com",
});

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        console.log(checkout);
    }

    addItemToCart = async (variantId, quantity) => {

    }

    fetchAllProducts = async () => {

    }

    fetchProductWithId = async (id) => {

    }
    
    closeCart = () => { }
    
    openCart = () => { }

    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider