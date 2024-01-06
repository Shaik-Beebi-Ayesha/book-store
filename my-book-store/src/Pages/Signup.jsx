import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { auth,db } from '../firebaseConfig';
import {doc,setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword , updateProfile } from 'firebase/auth';


const Signup = () => {
    const [userName,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error, setError] = useState("")
    
    const handleSignup = async ()=>{
        setError("")
        if(email && userName && password===confirmPassword){
          await createUserWithEmailAndPassword(auth,email,password).then(async(userCredential)=>{
            const user = userCredential.user;
            await setDoc(doc(db, "users",user.uid), {
              isLoggedIn: false,
              username: userName, 
              cartItems: [],
              uid : user.uid
            });
            updateProfile(user, {
              displayName: userName,
            });
            setName("");
            setConfirmPassword("");
            setEmail("");
            setPassword("");
            window.location.href = '/signin';
          })
          .catch((error)=>{
            setError(error.message);
          })
        }
        else{
          setError("Passwords didn't match !")
        }
      }

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
      SIGNUP
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
        <label htmlFor="name" className="text-white font-bold">Name</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mt-1 px-4 py-2 bg-transparent border-2 border-white text-white rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full mt-5">
        <label htmlFor="email" className="text-white font-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
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
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-2 bg-transparent border-2 border-white text-white rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full mt-5">
        <label htmlFor="confirmPassword" className="text-white font-bold">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full mt-1 px-4 py-2 bg-transparent border-2 border-white text-white rounded-md focus:outline-none"
        />
      </div>
      <div className='flex-col items-center justify-center'>
      <button 
        onClick={handleSignup}
        className='w-full mt-5 cursor-pointer font-semibold z-100 px-4 py-1 text-base bg-white rounded-md'>Create Account</button>
        
        <p className='text-white my-5'>Already have an Account ? {"   "}
        <Link to='/signin'>
        <span className='font-semibold hover:underline'>Signin</span>
        </Link>
        </p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Signup