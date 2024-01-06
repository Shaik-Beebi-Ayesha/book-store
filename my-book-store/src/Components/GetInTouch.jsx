import React,{useState} from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const GetInTouch = () => {
  const [email,setEmail] = useState("");
  const handleClick = ()=>{
    alert("You have subscribed to E-BookShop Successfully");
    setEmail("");
  }
  return (
    <>
    
    <div className='relative h-[300px] bg-cover bg-center bg-no-repeat my-20'
    style={{ backgroundImage: `url('https://drizzleandhurricanebooks.com/wp-content/uploads/2023/04/spring-aesthetic-ya-books.png')` }}> 
  <div className="absolute inset-0 bg-black opacity-55 flex flex-col items-center justify-center">
    <div className="text-2xl md:text-4xl font-extrabold text-white mix-blend-screen px-5 py-3 w-full text-center">
      Keep in the Loop with Our Latest News and Updates
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
    <input
    onChange = {(e)=>setEmail(e.target.value)}
      type="text"
      value={email}
      placeholder="Enter your email"
      className="mt-5 px-4 py-2 bg-transparent border-[2px] border-white text-white rounded-md focus:outline-none"
    />
    <button
    onClick = {handleClick}
    className="mt-5 cursor-pointer font-semibold overflow-hidden relative z-100 border-[2px] border-white group px-4 py-2 rounded-md">
  <span className="relative z-10 font-bold text-white text-sm group-hover:text-black duration-500">Get In Touch <RocketLaunchIcon/></span>
  <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
    
    </div>
  </div>
</div>

    </>
  )
}

export default GetInTouch
