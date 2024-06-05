import { useEffect } from 'react';
import { useRef } from 'react';
import { useDebugValue } from 'react';
import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [buttonValue, setButtonValue] = useState('copy');

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHILJKLMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()~{}[]';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    setButtonValue("copy");
  }, [length, numberAllowed, charAllowed, setPassword]);

 
  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  },[length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button onClick={copyPasswordToClipboard} className='focus:bg-blue-950 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            {buttonValue}
          </button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              id='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor='range'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              className='cursor-pointer'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
