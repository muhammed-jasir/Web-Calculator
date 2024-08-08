import React from 'react'

const DisplayScreen = () => {
    return (
        <div className='flex flex-col justify-end w-full max-w-full text-right  overflow-x-scroll scrollbar-hide'>
            <div className='text-xl mb-2 w-full'>
                input
            </div>
            <div className='text-4xl font-bold w-full whitespace-nowrap'>
                result
            </div>
        </div>
    )
}

export default DisplayScreen