import React from 'react'

const Button = ({ symbol, className, value, handleClick}) => {
    return (
        <div className="flex items-center justify-center">
            <button 
                type='button'
                className={`${className} flex items-center justify-center`}
                onClick={() => handleClick(value)}
            >
                {symbol}
            </button>
        </div>
    )
}

export default Button