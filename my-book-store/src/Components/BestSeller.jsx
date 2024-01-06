import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem , incrementCartItemQuantity } from '../features/featuresSlice'
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/search/best%20seller');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const booksWithIds = jsonData.books.map((book, index) => ({
          ...book,
          id: `bestSeller ${index}`,
          isCartItem: false,
          quantity : 1 ,
        }));
        setData(booksWithIds);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isLoggedIn = useSelector((state) => state.features.isLoggedIn);
  const cartItems = useSelector((state) => state.features.cartItems);  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (bookId) => {
    if (isLoggedIn) {
      const bookToAdd = data.find((book) => book.id === bookId);
      if (bookToAdd) {
        const existingBookIndex = cartItems.findIndex((item) => item.id === bookId);
        if (existingBookIndex !== -1) {
          dispatch(incrementCartItemQuantity(bookId));
        } else {
          dispatch(addCartItem(bookToAdd));
        }
      }
    } else {
      navigate('/signin');
    }
  };

  const handleShopNow = (bookId) => {
    navigate(`/shopnow?bookId=${bookId}`);
    const bookToShow = data.find((book) => book.id === bookId);
    
  };
  
  if (loading) {
    return <div>
      <div class="flex justify-center items-center h-screen">
  <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
  <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
  <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
</div>

    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div>
    <div className="flex flex-col justify-center items-center my-5 lg:my-20">
      <div
        className="bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRMf2yptTiiGUlpqyWwmCinZega3BE3T9mA&usqp=CAU')` }}
      >
        <h1 className="py-3 font-black text-4xl md:text-7xl bg-white mix-blend-lighten uppercase text-center">
          Best Sellers
        </h1>
      </div>
    </div>
  </div>
  <div className="flex gap-5 flex-wrap justify-center">
    {data &&
      data.map((item, index) => (
        <div
          key={index}
          className="relative bg-black group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-[400px] w-72 md:w-56 rounded-2xl hover:duration-700"
        >
          <div
            className="w-full h-[75%] bg-cover bg-center bg-no-repeat text-gray-800"
            style={{ backgroundImage: `url('${item.image}')` }}
          ></div>
          <div className="absolute bg-black -bottom-24 w-full h-[50%] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div
              className="text-lime-400 font-bold text-sm flex justify-between h-10 overflow-hidden"
            >
              <div>{item.title}</div>
              <div onClick={()=>handleAddToCart(item.id)}>
                <ShoppingCartIcon
                  style={{ fontSize: 35 }}
                  className="hover:border-[1.5px] hover:border-lime-400 p-1 rounded-full"
                />
              </div>
            </div>

            <p
              className="text-white text-xs"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.subtitle}
            </p>
            <p className='text-white text-sm'>{item.price}</p>
            <button className="cursor-pointer font-semibold overflow-hidden relative mt-12 z-100 border-[2px] border-lime-400 group px-4 py-1 rounded-md">
  <span 
  onClick={()=>handleShopNow(item.id)}
  className="relative z-10 font-bold text-lime-400 text-sm group-hover:text-black duration-500">Shop Now</span>
  <span className="absolute w-full h-full bg-lime-400 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-lime-400 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
          </div>
        </div>
      ))}
</div>
    </>
  );
};

export default BestSeller;

