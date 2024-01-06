import React,{useState} from 'react';

const ContactUs = () => {
  const [name,setName] = useState("");
  const [email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");
  const handleClick = ()=>{
    if(email && name && phone && subject && message){
      setName('');
    setEmail("");
    setPhone('');
    setSubject('');
    setMessage('');
    alert("Message sent successfully !")
    }
    else{
      alert("Please enter all fields.")
    }
  }
  return (
    <>
      <div
        className='relative h-[700px] md:h-[500px] bg-cover bg-center bg-no-repeat mt-20'
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5644cf28e4b0c6c59217a904/1546842018924-KS3EGU1E73Z0U665Z4G7/photo-1525715843408-5c6ec44503b1.jpg')`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
          <div className='text-6xl font-extrabold text-white mix-blend-screen px-5 py-3 w-full text-center'>
            Contact Us
          </div>
          
          <div className='w-[90%] sm:w-[85%] md:w-[70%] flex-col justify-center'>
          <div className='flex justify-center gap-5 w-full flex-wrap'>
          <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="w-[75%] sm:w-[45%] mt-5 px-4 py-2 bg-transparent border-[2px] border-white text-white rounded-md focus:outline-none"
    />
    <input
      type="text"
      placeholder="Email Address"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className="w-[75%] sm:w-[45%] mt-5 px-4 py-2 bg-transparent border-[2px] border-white text-white rounded-md focus:outline-none"
    />
          </div>
          <div className='flex justify-center gap-5 w-full flex-wrap'>
          <input
      type="text"
      placeholder="Phone"
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      className="w-[75%] sm:w-[45%] mt-5 px-4 py-2 bg-transparent border-[2px] border-white text-white rounded-md focus:outline-none"
    />
    <input
      type="text"
      placeholder="Subject"
      value={subject}
      onChange={(e)=>setSubject(e.target.value)}
      className="w-[75%] sm:w-[45%] mt-5 px-4 py-2 bg-transparent border-[2px] border-white text-white rounded-md focus:outline-none"
    />
          </div>
          <div className='flex justify-center my-5 flex-wrap'>
            <textarea 
            value = {message}
            placeholder='Message'
            onChange={(e)=>setMessage(e.target.value)}
            className='w-[92%] px-3 bg-transparent border-[2px] border-white h-[100px] text-white rounded-md'></textarea>
            
          </div>
          <div className='flex justify-center'>
          <button 
          onClick={handleClick}
          className="mt-5 cursor-pointer font-semibold overflow-hidden relative z-100 border-[2px] border-white group px-4 py-2 rounded-md">
  <span className="relative z-10 font-bold text-white text-sm group-hover:text-black duration-500">Send Message</span>
  <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
