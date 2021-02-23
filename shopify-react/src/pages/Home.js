import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shop'

const Home = () => {

    const { test } = useContext(ShopContext);

    return (
        <div>
            Home
            {test}
        </div>
    )
}

export default Home
