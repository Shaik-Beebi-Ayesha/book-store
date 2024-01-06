import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div className='my-20'>
    <div className="flex flex-col justify-center items-center mb-5">
            <div
              className="bg-cover bg-no-repeat w-full"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3khFv3XMCT2T6TOBYHrO1BedaN2CEy-MEg&usqp=CAU')`,
              }}
            >
              <h1 className="py-3 font-black text-4xl md:text-6xl bg-white mix-blend-lighten uppercase text-center">
                Our Reader's Raves
              </h1>
            </div>
          </div>
     <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
     <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#FFADAD] via-[#FFD6A5] to-[#FDFFB6] before:absolute before:top-0 w-80 h-72 relative bg-slate-100 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div 
    style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbwHR8BS2WZxflG_pj_1TyjvoXiuMoP5LkK_zJ74biLxvLImXf0WpdQM9qm4olM6GYb8&usqp=CAU')` }}
  class="w-28 h-28 bg-cover bg-center bg-no-repeat mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-16  group-hover:-translate-y-8 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-2 transition-all duration-500">
    <span class="text-2xl font-bold">George Johnson</span>
    <p className=''>User-friendly website and fast delivery. Impressed with the service!</p>
  </div>
  </div>
  <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl  from-[#FFADAD] via-[#FFD6A5] to-[#FDFFB6] before:absolute before:top-0 w-80 h-72 relative bg-slate-100 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div 
    style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww')` }}
  class="w-28 h-28 bg-cover bg-center bg-no-repeat mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-16  group-hover:-translate-y-8 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-2 transition-all duration-500">
    <span class="text-2xl font-bold">Selena Perrie</span>
    <p className='px-2'>Found rare books I couldn't find elsewhere. A book lover's paradise!</p>
  </div>
  </div> 
  <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl  from-[#FFADAD] via-[#FFD6A5] to-[#FDFFB6] before:absolute before:top-0 w-80 h-72 relative bg-slate-100 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div 
    style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
  class="w-28 h-28 bg-cover bg-center bg-no-repeat mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-16  group-hover:-translate-y-8 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-2 transition-all duration-500">
    <span class="text-2xl font-bold ">Jhon Doe</span>
    <p className=''>Great selection and easy checkout. Will definitely shop here again!</p>
  </div>
  </div> 
     </div>
    </div>
    </>
  )
}

export default Testimonial
