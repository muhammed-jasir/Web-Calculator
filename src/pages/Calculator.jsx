import React, { useState } from 'react'
import DisplayScreen from '../components/DisplayScreen'
import Button from '../components/Button'
import { IoBackspaceOutline } from 'react-icons/io5'

const Calculator = () => {
    const [input, setInput] = useState('');
    const [displayInput, setDisplayInput] = useState('');
    const [result, setResult] = useState('');

    const handleClear = () => {
        setInput('');
        setDisplayInput('');
        setResult('');
    }

    const handleBackspace = () => {
        let updatedInput = input.slice(0, -1);
        setInput(updatedInput);
        setDisplayInput(formatInput(updatedInput));
    }

    const handlePercent = (input) => {
        let inputArray = input.split("");

        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] == "%") {
                inputArray[i] = "/100";
            }
        }

        return inputArray.join("");
    }

    const handleCompute = () => {
        try {
            let updatedInput = handlePercent(input);
            let compute = eval(updatedInput);

            if (compute === Infinity || isNaN(compute)) {
                setResult('Error');
            }

            setResult(formatOutput(compute));

        } catch (error) {
            setResult('Error');
        }
    }

    const handleBracket = () => {
        let openBrackets = input.split('(').length - 1;
        let closeBrackets = input.split(')').length - 1;

        if (openBrackets > closeBrackets) {
            setInput(input + ')');
            setDisplayInput(formatInput(input + ')'));
        } else {
            setInput(input + '(');
            setDisplayInput(formatInput(input + '('));
        }
    };

    const formatInput = (input) => {
        let inputArray = input.split('');
    
        const formattedArray = inputArray.map((char, index) => {
            if (char === '*') {
                return <span key={index} className="operator"> x </span>;
            } else if (char === '/') {
                return <span key={index} className="operator"> ÷ </span>;
            } else if (char === '+' || char === '-') {
                return <span key={index} className="operator"> {char} </span>;
            } else if (char === '(' || char === ')') {
                return <span key={index} className="brackets"> {char} </span>;
            } else if (char === '%') {
                return <span key={index} className="percent"> % </span>;
            } else {
                return char;
            }
        });
    
        return formattedArray;
    };
    

    const formatOutput = (output) => {
        let outputString = output.toString();
        let [integerPart, decimalPart] = outputString.split(".");

        let outputArray = integerPart.split("");

        if (outputArray.length > 3) {
            for (let i = outputArray.length - 3; i > 0; i -= 3) {
                outputArray.splice(i, 0, ",");
            }
        }

        if (decimalPart) {
            outputArray.push(".");
            outputArray.push(decimalPart);
        }

        return outputArray.join("");
    }

    const validateInput = (value) => {
        const operators = ['+', '-', '*', '/', '%'];

        let lastInput = input.slice(-1);

        if (input === '' && value === '-') {
            return true;
        }

        if (input === '' && operators.includes(value)) {
            return false;
        }

        if (input.includes('.') && value === '.') {
            return false;
        }

        if (lastInput === '(' && operators.includes(value)) {
            return false;
        }

        if (value === '.' && lastInput === '.') {
            return false;
        }

        if (operators.includes(value) && operators.includes(lastInput) && lastInput !== '%') {
            return false;
        }

        if (lastInput === '%' && operators.includes(value)) {
            return true;
        }

        return true;
    }



    const handleButton = (value) => {
        if (value === 'C') {
            handleClear();
        } else if (value === 'backspace') {
            handleBackspace();
        } else if (value === '=') {
            handleCompute();
        } else if (value === 'brackets') {
            handleBracket();
        } else {
            if (validateInput(value)) {
                let updatedInput = input + value;
                setInput(updatedInput);
                setDisplayInput(formatInput(updatedInput));
            }
        }
    }

    return (
        <div className='flex flex-col items-center my-10 min-h-screen'>
            <div className='bg-gray-100 flex flex-col w-full max-w-[375px] min-h-[640px] rounded-xl overflow-hidden'>
                <div className='bg-slate-200 min-h-[200px] p-6 flex justify-end items-end flex-1'>
                    <DisplayScreen input={displayInput} result={result} />
                </div>

                <div className='px-6 pb-6 pt-4 grid grid-cols-4 grid-rows-5 gap-2 shadow-xl'>
                    <Button symbol='C' className='clear-btn' value='C' handleClick={handleButton} />
                    <Button symbol='()' className='operator-btn' value='brackets' handleClick={handleButton} />
                    <Button symbol='÷' className='operator-btn' value='/' handleClick={handleButton} />
                    <Button symbol={<IoBackspaceOutline />} className='clear-btn' value='backspace' handleClick={handleButton} />

                    <Button symbol='7' className='number-btn' value='7' handleClick={handleButton} />
                    <Button symbol='8' className='number-btn' value='8' handleClick={handleButton} />
                    <Button symbol='9' className='number-btn' value='9' handleClick={handleButton} />
                    <Button symbol='x' className='operator-btn' value='*' handleClick={handleButton} />

                    <Button symbol='4' className='number-btn' value='4' handleClick={handleButton} />
                    <Button symbol='5' className='number-btn' value='5' handleClick={handleButton} />
                    <Button symbol='6' className='number-btn' value='6' handleClick={handleButton} />
                    <Button symbol='-' className='operator-btn' value='-' handleClick={handleButton} />

                    <Button symbol='1' className='number-btn' value='1' handleClick={handleButton} />
                    <Button symbol='2' className='number-btn' value='2' handleClick={handleButton} />
                    <Button symbol='3' className='number-btn' value='3' handleClick={handleButton} />
                    <Button symbol='+' className='operator-btn' value='+' handleClick={handleButton} />

                    <Button symbol='%' className='operator-btn' value='%' handleClick={handleButton} />
                    <Button symbol='0' className='number-btn' value='0' handleClick={handleButton} />
                    <Button symbol='.' className='number-btn' value='.' handleClick={handleButton} />
                    <Button symbol='=' className='equal-btn' value='=' handleClick={handleButton} />
                </div>
            </div>
        </div>
    )
}

export default Calculator