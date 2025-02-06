


const Navbar = () => {
  return (
   <nav className='px-4 py-2 flex items-center justify-between'>
    <img src="/Logo.svg" alt="" />
    <ul className='text-white flex items-center gap-x-9 font-medium text-xl'>
      {
       list.map((item,index)=>(
        <li key={index}>{item}</li>
       ))
      }
      <li><button className='bg-white text-black px-4 py-2 rounded hover:bg-slate-200 transition duration-300'>Sign In</button></li>
    </ul>
   </nav>
  )
  
}

export default Navbar

const list = ["Home", "About", "Product"]