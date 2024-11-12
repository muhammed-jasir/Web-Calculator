import React, { useEffect, useRef } from 'react'

const DisplayScreen = ({ input, result }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }

    }, [input]);

    return (
        <div className='flex flex-col justify-end w-full text-right'>
            <div
                ref={inputRef}
                className='text-3xl mb-2 w-full whitespace-nowrap overflow-x-auto scrollbar-hide'
            >
                {input}
            </div>
            <div className='text-4xl font-bold w-full whitespace-nowrap overflow-x-auto scrollbar-hide'>
                {result}
            </div>
        </div>
    )
}

export default DisplayScreen