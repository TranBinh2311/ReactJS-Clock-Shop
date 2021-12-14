import React from 'react'

const Size = ({sizes}) => {
    return (
        <div className='sizes'>
            {
              sizes.map( (size, index) => (
                <button key ={index}>{size}</button>
              ))
            }
        </div>
    )
}

export default Size
