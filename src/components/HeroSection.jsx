import React from 'react'

const HeroSection = () => {
  return (
 <section className='min-h-screen relative'>
    <img src="/Rectangle 6.png" alt='bg-hero' className='absolute w-full h-full object-cover'/>
  <div className="flex items-center justify-center border min-h-screen">
  <div className='flex flex-col gap y-2'>
    <h2 className='text-[#87C159] font-semibold text-6xl'>EYE GLASS</h2>
    <p className='font-thin'>Look On The Bright Side Of Life</p>
<button className='px-3 py-1 bg-neutral-800 rounded w-fit'>Shop Now</button>
  </div>
  </div>
 </section>
  );
};

export default HeroSection