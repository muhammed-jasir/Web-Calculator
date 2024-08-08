import React from 'react'

const Button = ({ symbol, className }) => {
    return (
        <div className="flex items-center justify-center">
            <button 
                type='button'className={`${className} flex items-center justify-center`}
            >
                {symbol}
            </button>
        </div>
    )
}

export default Button