import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  incrementCartItemQuantityFromCart,
  decrementCartItemQuantity,
} from "../../features/featuresSlice";
import SubTotal from "./SubTotal";

const CartDisplay = () => {
  const cartItemsArr = useSelector((state) => state.features.cartItems);
  const isLoggedIn = useSelector((state) => state.features.isLoggedIn);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (itemId) => {
    const bookToRemove = cartItemsArr.find((book) => book.id === itemId);
    if (bookToRemove) {
      dispatch(removeCartItem(itemId));
    }
  };
  const handleIncrementQuantityFromCart = (itemId) => {
    dispatch(incrementCartItemQuantityFromCart({ itemId, quantity: 1 }));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementCartItemQuantity({ itemId, quantity: 1 }));
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold">
              Please log in to view your cart. Access requires authentication
            </p>
            <Link to="/">
              <div className="flex justify-center">
                <button className="border-[1px] border-black px-3 py-1 my-5">
                  Back To Home
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <>
        <div>
        <div className='relative h-[200px] bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: `url('https://drizzleandhurricanebooks.com/wp-content/uploads/2023/04/spring-aesthetic-ya-books.png')` }}> 
   
  <div className="absolute inset-0 bg-black opacity-55 flex flex-col items-center justify-center">
    <div className="text-4xl font-extrabold text-white mix-blend-screen px-5 py-3 w-full text-center">
    Welcome to your Shopping Wonderland !
    </div>
    <Link to="/"><button className="text-white border-[1px] px-3 py-1 my-1">Back to Home</button></Link>
  </div>
</div>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-full gap-10">
          <div className="w-[95%] md:w-[65%] my-10">
            {cartItemsArr &&
              cartItemsArr.map((item) => (
                <div className="flex items-start justify-between">
                  <div className="w-[40%] h-full md:w-[25%]">
                  <Link to={`/shopnow?bookId=${item.id}`}>
                    <img src={item.image} className="h-full w-full"/>
                  </Link>
                  </div>
                  <div className="w-[65%] my-4">
                  <Link to={`/shopnow?bookId=${item.id}`}>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  </Link>
                    
                    <p className="text-base font-semibold my-5">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center mt-5">
                      <button
                        onClick={() => handleDecrementQuantity(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded-l-md"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrementQuantityFromCart(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="px-3 py-1 text-white bg-[#24715b] my-5 rounded-md text-base font-semibold"
                    >
                      Remove From Cart
                    </button>
                  </div>
                  <div className="my-4">
                    <p className="text-base font-semibold float-end">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <SubTotal cartItemsArr={cartItemsArr} />
        </div>
        </>
      )}
    </>
  );
};

export default CartDisplay;
