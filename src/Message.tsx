import  { useState } from 'react';
import './index.css';

function Message() {
    
    const [count, setCount] = useState(0);

    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const tenplus=()=>setCount(count+10);
    const tenminus=()=>setCount(count-10)

    return (
        <section>
            
            <div className='flex flex-row gap-10 justify-center mb-10 mt-8'>
                <button className={`p-2 border-white        border-solid border text-white`} onClick={tenminus}>-10

                </button>
                <button 
                    className={`p-2 border ${count < 0 ? 'bg-blue-500 text-black':count === 0 ? 'bg-green-500 text-black':count>10 ? 'bg-red-500 text-black':'bg-white text-black'}`} 
                    onClick={increment}
                >
                    +1
                </button>
                <button 
                    className={`p-2 border ${count < 0 ? 'bg-blue-500 text-black' :count === 0 ? 'bg-green-500 text-black': count>10 ? 'bg-red-500 text-black':'bg-white text-black'}`} 
                    onClick={decrement}
                >
                    -1
                </button>
                <button className={`p-2 border-white border-solid border text-white`} onClick={tenplus}>+10</button>
                
            </div>

            

            
            <div className='flex justify-center'>
                <input 
                    type="text" 
                    value={`The number is ${count}`}
                    readOnly 
                    className="w-[30vw] h-12 border border-gray-500 p-2 text-black text-center"
                />
            </div>
        </section>
    );
}

export default Message;
