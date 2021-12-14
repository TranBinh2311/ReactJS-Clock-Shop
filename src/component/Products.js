import React , {useContext}from 'react'
import {DataContext} from './DataProvider'
import {Link} from "react-router-dom"

const Products = () => {
    const [products] = useContext(DataContext);
    console.log(products);
    return (
        <div>
            <div className="products">
                {
                    products.map(product => (
                        <div className="card" key={product._id}>

                            {/* image */}
                            <Link to={`/products/${product._id}`}>
                                <img src = {product.images[0]}  alt=""/>
                            </Link>

                            {/*  box */}
                            <div className="box">
                                <h3 title= {product.title}>
                                    <Link to="/">{product.title}</Link>
                                </h3>
                                <p>{product.description}</p>
                                <h4>${product.price}</h4>
                                <button> Add to Cart</button>
                            </div>
                        </div>
                    ) )
                }
                
            </div>
        </div>
    )
}

export default Products
