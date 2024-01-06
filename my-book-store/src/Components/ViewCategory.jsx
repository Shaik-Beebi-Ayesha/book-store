import React,{useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem , incrementCartItemQuantity } from '../features/featuresSlice'


const ViewCategory = () => {

  const categoryArr = [
    {
        imgsrc : 'https://www.shutterstock.com/image-photo/hand-holding-book-read-alone-260nw-2039738759.jpg',
        caption : 'EMBRACE THE POWER OF NOVELS!',
        search : 'novel'
    },
    {
        imgsrc : 'https://i.pinimg.com/564x/fe/f0/5e/fef05ed2173ae7ea6ea56db2e54c49e5.jpg',
        caption : 'WELCOME TO A WORLD OF ROMANCE !',
        search : 'romance'
    },
    {
        imgsrc : 'https://cdn.mos.cms.futurecdn.net/rkoxVzeciu3XWVLDU2DxiN-1200-80.jpg',
        caption : 'GET READY TO LOSE YOURSELF IN FICTION!',
        search : 'fiction'
    },
    {
        imgsrc : 'https://www.theweek.in/content/dam/week/news/india/images/2021/10/1/murder-plan-shutterstock.jpg',
        caption : 'EXPLORE THE DEPTHS OF CRIMINAL MINDS!',
        search : 'crime'
    },
    {
        imgsrc : 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0gfw949.jpg',
        caption : 'WELCOME TO A WORLD OF FLAVORS!',
        search : 'cooking'
    },
    {
      imgsrc : 'https://img.freepik.com/premium-photo/generative-ai-illustration-giant-pile-white-scary-creepy-ghosts-opening-mouths-forest-night_501669-25904.jpg',
      caption : 'UNLEASH YOUR INNER FEAR!',
      search : 'horror'
  }
]


  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const category = params.get('category');
  console.log(category);
  const [data,setData] = useState([]);
  const [error,setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const booksWithIds = jsonData.items.map((book, index) => ({
          ...book,
          id: `${category} ${index}`,
          isCartItem: false,
          quantity : 1 ,
        }));
        setData(booksWithIds);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  
  const selectedCategory = categoryArr.find((item) => item.search === category);

  // const isLoggedIn = useSelector((state) => state.features.isLoggedIn);
  // const cartItems = useSelector((state) => state.features.cartItems);  
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleAddToCart = (bookId) => {
  //   if (isLoggedIn) {
  //     const bookToAdd = data.find((book) => book.id === bookId);
  //     if (bookToAdd) {
  //       const existingBookIndex = cartItems.findIndex((item) => item.id === bookId);
  //       if (existingBookIndex !== -1) {
  //         dispatch(incrementCartItemQuantity(bookId));
  //       } else {
  //         dispatch(addCartItem(bookToAdd));
  //       }
  //     }
  //   } else {
  //     navigate('/signin');
  //   }
  // };

  const handleShopNow = (bookId) => {
    navigate(`/categoryshopnow?category=${category}&bookId=${bookId}`);
  };

  return (
    <>

{selectedCategory && (
        <div
          className="relative h-[200px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${selectedCategory.imgsrc})` }}
        >
          <div className="absolute inset-0 bg-black opacity-55 flex flex-col items-center justify-center">
            <div className="text-4xl font-extrabold text-white mix-blend-screen px-5 py-3 w-full text-center">
              {selectedCategory.caption}
            </div>
            <Link to="/">
              <button className="text-white border-[1px] px-3 py-1 my-1">Back to Home</button>
            </Link>
          </div>
        </div>
      )}
     <div className='flex gap-5 flex-wrap justify-center my-10'>
     {data &&
      data.map((item,index) => (
        <>
        <div
          key={index}
          className="relative bg-black group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-[400px] w-80 sm:w-72 md:w-64 rounded-2xl hover:duration-700"
        >
          <div
            className="w-full h-[75%] text-gray-800"
            
          >
            <img src={item.volumeInfo.imageLinks.thumbnail} className='w-[90%] h-[95%] mx-auto my-2'/>
          </div>
          <div className="absolute bg-black -bottom-24 w-full h-[50%] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div
              className="text-lime-400 font-bold text-sm flex justify-between h-10 overflow-hidden"
            >
              <div>{item.volumeInfo.title}</div>
              {/* <div onClick={()=>handleAddToCart(item.id)}>
                <ShoppingCartIcon
                  style={{ fontSize: 35 }}
                  className="hover:border-[1.5px] hover:border-lime-400 p-1 rounded-full"
                />
              </div> */}
            </div>

            <p
              className="text-white text-sm"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
            Author: {item.volumeInfo.authors[0]}
            </p>
            {item.saleInfo?.retailPrice?.amount ? (
        <p className='text-white text-sm'>${item.saleInfo.retailPrice.amount}</p>
      ) : (
        <p className='text-white text-sm'>Not for sale</p>
      )}
            <button className="cursor-pointer font-semibold overflow-hidden relative mt-12 z-100 border-[2px] border-lime-400 group px-4 py-1 rounded-md">
  <span 
  onClick={()=>handleShopNow(item.id)}
  className="relative z-10 font-bold text-lime-400 text-sm group-hover:text-black duration-500">Shop Now</span>
  <span className="absolute w-full h-full bg-lime-400 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-lime-400 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
          </div>
        </div>

        
        </>
      ))}
     </div>
    </>
  )
}

export default ViewCategory
