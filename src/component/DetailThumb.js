import React from 'react'

const DetailThumb = ({images, setIndex}) => {
    return (
        <div className='thumb'>
            {
                 images.map((img, index)=>(
                    <img src={img} alt= "" key = {index} onClick= {()=> setIndex(index)} />
                 ))
            }
        </div>
    )
}

export default DetailThumb
