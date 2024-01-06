import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import MenuItems from './MenuItems';
import { useSelector,useDispatch } from 'react-redux';
import { setIsLoggedIn,setCartItems } from '../features/featuresSlice';
import { auth,db } from '../firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";


function NavBar() {
  const isLoggedIn = useSelector((state) => state.features.isLoggedIn);
  const cartItems = useSelector((state)=>state.features.cartItems);
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(db, 'users', user.uid), {
          isLoggedIn: false,
        });
      }
      await signOut(auth);
      dispatch(setIsLoggedIn(false));
      dispatch(setCartItems([]));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className='fixed top-0 w-full z-50'>
      <div className='flex justify-between items-center bg-black px-5'>
        <div className='w-[100px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src='https://www.thebookshop.es/logo.jpg'/>
        </div>
        <div className='text-white'>
        <NavItems/>
        </div>
       <div className='flex gap-3 items-center'>
        <MenuItems/>
       {
        !isLoggedIn && (
          <Link to="/signin">
       <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border-[2px] border-white group px-4 py-1 rounded-md">
  <span className="relative z-10 font-bold text-white text-sm group-hover:text-black duration-500">Login</span>
  <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
       </Link>
        )
       }
{
  !isLoggedIn && (
    <Link to='/signup'>
<button className="hidden sm:block cursor-pointer font-semibold overflow-hidden relative z-100 border-[2px] border-white group px-4 py-1 rounded-md">
  <span className="relative z-10 font-bold text-white text-sm group-hover:text-black duration-500">Register</span>
  <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
</Link>
  )
}
{
  isLoggedIn && (
       <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border-[2px] border-white group px-4 py-1 rounded-md">
  <span 
  onClick={handleLogOut}
  className="relative z-10 font-bold text-white text-sm group-hover:text-black duration-500">LogOut</span>
  <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
       
  )
}
<Link to='/cart'>
<div className='flex'>
<span className="text-white"><ShoppingBagIcon style={{fontSize:35}}/></span>
  <div className='bg-lime-400 text-black font-bold text-sm rounded-full h-full px-1 relative right-4 bottom-2'>{isLoggedIn? cartItems?.length: 0}</div>
</div>
</Link>
       </div>
      </div>
      </div>
    </>
  )
}

export default NavBar
