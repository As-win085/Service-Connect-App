import React, { useState, useEffect, useCallback, useRef } from 'react';
import ConfirmButton from '../ConfirmButton';

const VerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    console.log("Resending code...");
    setTimer(59); // Reset the timer
  };

  const getNextEmptyIndex = useCallback(() => {
    return code.findIndex(digit => digit === '');
  }, [code]);

  const handleKeypadInput = (digit) => {
    setCode(prevCode => {
      const newCode = [...prevCode];
      const nextIndex = getNextEmptyIndex();
      
      if (nextIndex !== -1) {
        newCode[nextIndex] = digit;
        if (nextIndex < newCode.length - 1) {
            inputRefs[nextIndex + 1].current?.focus();
        } else {
            inputRefs[nextIndex].current?.focus();
        }
      }
      return newCode;
    });
  };

  const handleDelete = () => {
    setCode(prevCode => {
      const newCode = [...prevCode];
      let lastFilledIndex = -1;
      for (let i = newCode.length - 1; i >= 0; i--) {
        if (newCode[i] !== '') {
          lastFilledIndex = i;
          break;
        }
      }

      if (lastFilledIndex !== -1) {
        newCode[lastFilledIndex] = '';
        inputRefs[lastFilledIndex].current?.focus();
      } else {
        inputRefs[0].current?.focus();
      }
      return newCode;
    });
  };


  const CodeInputBox = ({ index, value }) => {
    const isFilled = value !== '';
    const isFocused = inputRefs[index]?.current === document.activeElement;

    return (
      <div
        ref={inputRefs[index]} 
        tabIndex={0}
        className={`
          w-16 h-16 sm:w-20 sm:h-20 
          rounded-xl shadow-lg 
          flex items-center justify-center 
          text-3xl font-bold 
          transition-all duration-150 ease-in-out
          ${isFilled ? 'bg-zinc-700 text-white' : 'bg-zinc-600 text-zinc-400'}
          ${isFocused ? 'ring-2 ring-blue-500' : ''}
        `}
        onClick={() => inputRefs[index].current?.focus()}
      >
        {isFilled ? value : '*'}
      </div>
    );
  };

  const KeypadButton = ({ value, onClick, isAction = false }) => (
    <button
      onClick={onClick}
      className={`
        w-20 h-20 sm:w-24 sm:h-24 
        flex items-center justify-center 
        text-2xl font-semibold 
        rounded-full 
        transition-colors duration-150 ease-in-out
        ${isAction ? 'text-zinc-400' : 'text-gray-900'}
        hover:bg-zinc-700 active:bg-zinc-600
      `}
      aria-label={value === 'delete' ? 'Delete' : value}
    >
      {value === 'delete' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l-2-2m2 2l2-2m-2 2l-2-2M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.414 6H7a2 2 0 00-2 2v11a2 2 0 002 2z" /></svg> : value}
    </button>
  );

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length === 4) {
      console.log('Verifying code:', fullCode);
      alert(`Verifying code: ${fullCode}`);
    } else {
      alert('Please enter the full 4-digit code.');
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-gray-300 text-white flex flex-col items-center p-4">
      {/* Top Section */}
      <div className="w-full max-w-sm pt-12 text-center">
        <p className="text-gray-800 text-sm mb-8">
          Code has been Send to ( +1 ) ***-***-**529
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center space-x-3 mb-8">
          {code.map((digit, index) => (
            <CodeInputBox key={index} index={index} value={digit} />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="text-sm mb-12 text-gray-800">
          Resend Code in <span className="font-bold text-lg">{timer}s</span>
          {/* <button 
            onClick={handleResend} 
            disabled={timer > 0} 
            className={`ml-2 text-sm font-semibold ${timer > 0 ? 'text-zinc-500' : 'text-blue-400 hover:text-blue-300'}`}
          >
            Resend
          </button> */}
        </p>

        <div>
            <ConfirmButton ButtonName="Verify" />
        </div>
      </div>
      
      {/* --- Numeric Keypad --- */}
      <div className="w-full max-w-md mt-auto mb-4 sm:mt-24">
        <div className="grid grid-cols-3 gap-y-4 gap-x-2 text-center justify-items-center">
          {/* Row 1 */}
          <KeypadButton value="1" onClick={() => handleKeypadInput('1')} />
          <KeypadButton value="2" onClick={() => handleKeypadInput('2')} />
          <KeypadButton value="3" onClick={() => handleKeypadInput('3')} />
          {/* Row 2 */}
          <KeypadButton value="4" onClick={() => handleKeypadInput('4')} />
          <KeypadButton value="5" onClick={() => handleKeypadInput('5')} />
          <KeypadButton value="6" onClick={() => handleKeypadInput('6')} />
          {/* Row 3 */}
          <KeypadButton value="7" onClick={() => handleKeypadInput('7')} />
          <KeypadButton value="8" onClick={() => handleKeypadInput('8')} />
          <KeypadButton value="9" onClick={() => handleKeypadInput('9')} />
          {/* Row 4 */}
          <KeypadButton value="*" isAction={true} onClick={() => {}} /> {/* Placeholder button */}
          <KeypadButton value="0" onClick={() => handleKeypadInput('0')} />
          <KeypadButton value="delete" isAction={true} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;