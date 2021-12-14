import React,{useContext, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import Colors from './Colors';
import Size from './Size';
import {DataContext} from './DataProvider'
import DetailThumb from './DetailThumb';

const Detail = () => {
    const {id} = useParams();
    const [products] = useContext(DataContext);
    const [index, setIndex] = useState(0)
    const imgDiv = useRef();

    const details = products.filter( (product, index) =>{
        return product._id === id;
    })

    const handleMouseMove= e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) /width *100;
        const y = (e.pageY - top) /height *100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
     return (
        <div>
            {
                details.map( product => (
                    <div className='details' key={product._id}>
                        <div className='img-container' onMouseMove={handleMouseMove}
                         style= { {backgroundImage: `url( ${product.images[index]} )`}}
                         ref={imgDiv} onMouseLeave={()=> imgDiv.current.style.backgroundPosition = `center`}/>

                        <div className='box-details'>
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>          
                            <Colors colors={product.colors}/>
                            <Size sizes = {product.sizes}/>         
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <DetailThumb images = {product.images} setIndex = {setIndex}/>
                            <button className='cart'>Add to cart</button>
                        </div>  
                    </div>

                  
                ))
            }
        </div>
    )
}

export default Detail
