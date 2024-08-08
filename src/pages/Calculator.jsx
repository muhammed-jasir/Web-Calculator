import React from 'react'
import DisplayScreen from '../components/DisplayScreen'
import Button from '../components/Button'
import { IoBackspaceOutline } from 'react-icons/io5'

const Calculator = () => {

    return (
        <div className='flex flex-col items-center my-10 min-h-screen'>
            <div className='bg-gray-100 flex flex-col w-full max-w-[375px] min-h-[640px] rounded-xl overflow-hidden'>
                <div className='bg-slate-200 min-h-[200px] p-6 flex justify-end items-end flex-1'>
                    <DisplayScreen />
                </div>

                <div className='px-6 pb-6 pt-4 grid grid-cols-4 grid-rows-5 gap-2 shadow-xl'>
                    <Button symbol='C' className='clear' />
                    <Button symbol='()' className='operator' />
                    <Button symbol='÷' className='operator' />
                    <Button symbol={<IoBackspaceOutline />} className='clear' />

                    <Button symbol='7' className='number' />
                    <Button symbol='8' className='number' />
                    <Button symbol='9' className='number' />
                    <Button symbol='x' className='operator' />

                    <Button symbol='4' className='number' />
                    <Button symbol='5' className='number' />
                    <Button symbol='6' className='number' />
                    <Button symbol='-' className='operator' />

                    <Button symbol='1' className='number' />
                    <Button symbol='2' className='number' />
                    <Button symbol='3' className='number' />
                    <Button symbol='+' className='operator' />

                    <Button symbol='%' className='operator' />
                    <Button symbol='0' className='number' />
                    <Button symbol='.' className='number' />
                    <Button symbol='=' className='equal' />
                </div>
            </div>
        </div>
    )
}

export default Calculator