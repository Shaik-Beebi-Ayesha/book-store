import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setUserName, setUid ,setCartItems} from '../features/featuresSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUserName(docSnap.data().username || ""));
        dispatch(setUid(docSnap.data().uid));
        dispatch(setCartItems(docSnap.data().cartItems));
      } else {
        console.log("No such document!");
      }
      await updateDoc(doc(db, "users", user.uid), {
        isLoggedIn: true,
      });
      navigate(-1);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate('/signin')
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  


  return (
    <>
     <div
  className='relative h-screen bg-cover bg-center bg-no-repeat'
  style={{
    backgroundImage: `url('https://dl6pgk4f88hky.cloudfront.net/2023/05/31/GettyImages-528712065.jpg')`,
  }}
>
  <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
    <div className='text-6xl font-extrabold text-white mix-blend-screen px-5 py-3 w-full text-center'>
        LOGIN
    </div>
    {
      error && (
        <div className='text-2xl sm:text-3xl text-white'>
          {error}
        </div>
      )
    }
    <div className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[35%] flex flex-col items-center'>
      
      <div className="flex flex-col w-full mt-5">
        <label htmlFor="email" className="text-white font-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange = {(e)=>setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-2 bg-transparent border-2 border-white text-white rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full mt-5">
        <label htmlFor="password" className="text-white font-bold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange = {(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-2 bg-transparent border-2 border-white text-white rounded-md focus:outline-none"
        />
      </div>
      <div className='flex-col items-center justify-center'>
        <button 
        onClick={handleLogIn}
        className='w-full mt-5 cursor-pointer font-semibold z-100 px-4 py-1 text-base bg-white rounded-md'>Log In</button>
        <p className="text-base my-5 text-white">
                      Forgot Password ?{" "}
                      <span
                        className="hover:underline font-semibold"
                        onClick={handleReset}

                      >
                        Click Here
                      </span>
                    </p>
                    <p className="text-base text-white mb-4">
                      Don't have an account?{" "}
                      <Link to='/signup'>
                      <span
                        className="hover:underline font-semibold"
                    
                      >
                        SignUp
                      </span>
                      </Link>
                    </p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Signin
