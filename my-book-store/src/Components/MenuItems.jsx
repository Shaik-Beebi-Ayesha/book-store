import React,{useState} from 'react'
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';


const MenuItems = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
      setMenuOpen(!menuOpen);
    };
    const handleMenuItemClick = () => {
      setMenuOpen(false); 
    };
  return (
    <div>
      <div className="toggle-menu relative block lg:hidden float-end">
      <button
        onClick={handleToggle}
        
        className="block lg:hidden text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        <MenuIcon style={{fontSize:40}}/>
      </button>
      {menuOpen && (
        <nav className="absolute top-3 w-[200px] left-0 bg-black mt-12 py-2 px-4 shadow-lg">
          <ul className='text-white'>
            <Link to='slider' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Home</li>
            </Link>
            <Link to='best-seller' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Best Sellers</li>
            </Link>
            <Link to='new-arrivals' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>New Arrivals</li>
            </Link>
            <Link to='categories' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Categories</li>
            </Link>
            <Link to='about' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>About</li>
            </Link>
            <Link to='contact-us' spy={true} smooth={true} duration={500} offset={-70} onClick={handleMenuItemClick}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Contact</li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
    </div>
  )
}

export default MenuItems
