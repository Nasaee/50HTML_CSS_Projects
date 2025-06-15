import { useRef } from 'react';
import nikeLogo from '../assets/images/nike.png';
import shoe1 from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe2.png';
// import clsx from 'clsx';

const NikeProductCardTailwind = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className='font-sans w-full h-screen bg-neutral-800 grid place-items-center [&.change_.card-top]:bg-red-600 [&.change_.shoe-1]:translate-x-[-50rem] [&.change_.shoe-1]:rotate-[45deg] [&.change_.shoe-2]:translate-x-[-40rem] [&.change_.shoe-2]:rotate-[-45deg] [&.change_.price]:bg-red-700 '
    >
      <div className='w-[50rem] h-[70rem] bg-[#ccc] px-[100px] grid place-items-center overflow-hidden'>
        <h2 className='text-[18px] font-[600]'>Tailwind Version</h2>
        <div className='w-[300px] h-[550px] bg-[#eee] rounded-[2.5rem] shadow-[0_2rem_6rem_rgba(0,0,0,0.7)] relative'>
          <div className='card-top h-[50%] w-full bg-[#f1ae04] p-12 rounded-t-[2.5rem] transition-colors duration-500 relative'>
            <img src={nikeLogo} className='w-[8rem] mb-[2rem]' />
            <div class='text-white'>
              <h1 className='font-[600] uppercase tracking-[1px] mb-4'>
                Air Structure
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quasi ratione praesentium eum commodi modi neque dignissimos
                eligendi illo officiis!
              </p>
            </div>
            <img
              src={shoe1}
              class='shoe-1 w-[30rem] absolute top-[-2.5rem] right-[-10rem] transform transition-transform duration-1000'
            />
            <img
              src={shoe2}
              class='shoe-2 w-[33rem] absolute top-[-10rem] right-[-45rem] transform transition-transform duration-1000'
            />
          </div>
          <div class='card-bottom w-full h-[50%] px-[3rem] py-[2rem] relative'>
            <h1 className='font-[600] uppercase tracking-[0.1rem] text-[#333] mb-[0.6rem]'>
              Air Structure
            </h1>
            <div class='badge absolute top-[23px] right-[5rem] w-[3.5rem] h-[1.6rem] bg-[#25d390] text-white grid place-items-center rounded-[0.3rem] text-[0.9rem] font-bold tracking-[0.1rem]'>
              New
            </div>
            <h3 className='text-[1rem] font-[400] uppercase mb-[0.6rem]'>
              Running Collections
            </h3>
            <div className='stars mb-[3rem]'>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star last:opacity-[0.4]'></i>
            </div>
            <div className='size mb-[3rem]'>
              <h4 className='text-[1.2rem] uppercase tracking-[0.1rem] mb-[1.3rem]'>
                Size
              </h4>
              <div className='sizes flex gap-[2.5rem] text-[1.3rem] [&>span:nth-child(3)]:w-[2rem] [&>span:nth-child(3)]:h-[2rem] [&>span:nth-child(3)]:bg-[#25d393] [&>span:nth-child(3)]:rounded-full [&>span:nth-child(3)]:grid [&>span:nth-child(3)]:place-items-center'>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
            </div>
            <div className='color text-[1.2rem] uppercase tracking-[0.1rem] mb-[1rem]'>
              <h4>Color</h4>
              <div className='colors flex gap-[1.5rem]'>
                <div
                  className='color-1 w-[2rem] h-[2rem] bg-[#1c477a] rounded-full cursor-pointer shadow-[0_1rem_2rem_rgba(28, 71, 122, 0.2)]'
                  onClick={() =>
                    containerRef.current.classList.remove('change')
                  }
                />
                <div
                  className='color-2 w-[2rem] h-[2rem] bg-[#c02244] rounded-full cursor-pointer shadow-[0_1rem_2rem_rgba(192,34,68,0.3)]'
                  onClick={() => containerRef.current.classList.add('change')}
                />
              </div>
            </div>
            <div className='price w-[16rem] h-[4rem] bg-[#1c477a] text-white rounded-[0.5rem] absolute right-[-1rem] bottom-[3rem] flex items-center justify-center transition-colors duration-500 gap-[1rem] text-[2rem]'>
              <span className='uppercase font-[300]'>Usd</span>
              <span className='font-bold'>350,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikeProductCardTailwind;
