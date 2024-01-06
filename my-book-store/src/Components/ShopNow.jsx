import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem,incrementCartItemQuantity } from '../features/featuresSlice';

function generateRandomRating() {
  const maxRating = 5; 
  const minRating = 1;
  const rating = Math.floor(Math.random() * (maxRating - minRating + 1)) + minRating; 
  const stars = '\u2605'.repeat(rating) + '\u2606'.repeat(maxRating - rating); 
  return { rating, stars };
}
function ShopNow() {
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const bookId = params.get('bookId');
  const [ratingData, setRatingData] = useState({  stars: '' });

  useEffect(() => {
    const { stars } = generateRandomRating();
    setRatingData({ stars });
  }, []);

  const [data,setData] = useState([]);

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
      }
    };

    fetchData();
  }, []);

  const bookToShow = data.find((book) => book.id === bookId);
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
          alert("Book Added to Cart Successfully !");
        } else {
          dispatch(addCartItem(bookToAdd));
          alert("Book Added to Cart Successfully !");
        }
      }
    } else {
      navigate('/signin');
    }
  };
  

  const handleIncrement = (itemToUpdate) => {
    const updatedData = data.map((item) => {
      if (item.id === itemToUpdate.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setData(updatedData);
  };
  
  const handleDecrement = (itemToUpdate) => {
    if (itemToUpdate.quantity > 1) {
      const updatedData = data.map((item) => {
        if (item.id === itemToUpdate.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setData(updatedData);
    }
  };
  

  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center w-full h-screen mx-auto'>
    <div className='h-[650px] w-[50%] md:w-[35%] lg:w-[400px]'>
      <img className='w-full h-full' src={bookToShow?.image}/>
    </div>
    <div className='mx-10 md:mx-0'>
      <p className='text-3xl font-bold'>{bookToShow?.title}</p>
      <p className='text-xl font-bold my-5'>{bookToShow?.subtitle}</p>
      <p className='text-base font-semibold'>{bookToShow?.price}</p>
      <p className='text-3xl text-[#24715b] my-5'>{ratingData.stars}</p>
      <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(bookToShow)}
                        className="px-3 py-1 bg-gray-200 rounded-l-md"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-gray-100">
                        {bookToShow?.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(bookToShow)}
                        className="px-3 py-1 bg-gray-200 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                    <div className='flex gap-5 my-5'>
                    <button
                      onClick={() => handleAddToCart(bookToShow?.id)}
                      className="px-3 py-1 text-white bg-[#24715b] my-5 rounded-md text-base font-semibold"
                    >
                      Add to Cart
                    </button>
                    <button
                      
                      className="px-3 py-1 text-white bg-[#24715b] my-5 rounded-md text-base font-semibold"
                    >
                      Buy Now
                    </button>
                    </div>
    </div>
    </div>
    </>
  );
}

export default ShopNow;
