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
function CategoryShopNow() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const bookId = searchParams.get('bookId');

  const [ratingData, setRatingData] = useState({  stars: '' });
  const[error,setError] = useState("")

  useEffect(() => {
    const { stars } = generateRandomRating();
    setRatingData({ stars });
  }, []);

  const [data,setData] = useState([]);

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

  const bookToShow = data.find((book) => book.id === bookId);
  
 
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
    <div className='h-[400px] md:h-[500px] w-[50%] md:w-[35%] lg:w-[300px] mx-10'>
      <img className='w-full h-full' src={bookToShow?.volumeInfo?.imageLinks?.thumbnail}/>
    </div>
    <div className='flex justify-center mx-10'>
    <div className=''>
      <p className='text-3xl font-bold'>{bookToShow?.volumeInfo?.title}</p>
      <p className='text-xl font-bold my-5'>{bookToShow?.volumeInfo?.subtitle}</p>
      <p className='text-xl font-bold my-5'>Author : {bookToShow?.volumeInfo?.authors[0]}</p>
      {bookToShow?.saleInfo?.retailPrice?.amount ? (
        <p className='text-base font-semibold'>${bookToShow.saleInfo.retailPrice.amount}</p>
      ) : (
        <p className='text-base font-semibold'>Not for sale</p>
      )}
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
                      
                      className="px-3 py-1 text-white bg-[#24715b] my-5 rounded-md text-base font-semibold"
                    >
                      Buy Now
                    </button>
                    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default CategoryShopNow;
