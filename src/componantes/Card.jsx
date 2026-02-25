import React from 'react'

const Cart = (props) => {
    return (
        <div className="w-75  border-2 border-gray-900 p-3 rounded-lg">
            <div className='m-auto w-30 h-30 rounded-full overflow-hidden'>
                <img src={props.img} className='w-full h-full object cover'/>

            </div>
            <div>
                <h1 className='text-center text-2xl text-gray-600 font-semibold'>{props.username}</h1>
                <p className='text-center text-xl text-gray-700'>{props.Text}</p>

            </div>

        </div>
    )
}

export default Cart
