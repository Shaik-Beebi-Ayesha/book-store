import { createSlice} from '@reduxjs/toolkit';
import { updateDoc,doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const initialState = {
  isLoggedIn: false,
  uid : "",
  cartItems: [],
  userName: ''
};
export const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUid(state,action) {
      state.uid = action.payload;
  },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addCartItem(state, action) {
      const newItem = { ...action.payload, isCartItem: true};
      const newState = {...state,cartItems:[...state.cartItems,newItem]};
      updateFirestore(newState);
      return newState ;
    },    
    removeCartItem(state, action) {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
      updateFirestore(state);
    },
    incrementCartItemQuantity(state, action) {
      const bookId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === bookId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
      updateFirestore(state);
    },
    incrementCartItemQuantityFromCart(state, action) {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity += quantity;
      }
      updateFirestore(state);
    },

    decrementCartItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === itemId);
      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= quantity;
        }
      }
      updateFirestore(state);
    },
  },
});
const updateFirestore = async (state) => {
  try {
    const { uid, cartItems } = state;
    await updateDoc(doc(db, 'users', uid), { cartItems });
    console.log('Firestore updated with new favItems');
  } catch (error) {
    console.error('Error updating Firestore:', error);
  }
};

export const { setIsLoggedIn, setUserName, addCartItem, removeCartItem ,setUid,setCartItems,incrementCartItemQuantity
,decrementCartItemQuantity,incrementCartItemQuantityFromCart} = featuresSlice.actions;
export default featuresSlice.reducer;
