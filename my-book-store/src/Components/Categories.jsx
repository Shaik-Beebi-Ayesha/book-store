import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const category = [
        {
            imgsrc : 'https://img.freepik.com/free-photo/young-woman-reading-book-while-lying-floor-home_169016-20206.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais',
            caption : 'Novels',
            search : 'novel'
        },
        {
            imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CVTiHzmnSfZ1HGDtEvrWqXqnlc2dqcl-wcmFIYNZDp5NAXF_yWNYVro1UuDz5MrYPLc&usqp=CAU',
            caption : 'Romance',
            search : 'romance'
        },
        {
            imgsrc : 'https://images.theconversation.com/files/551054/original/file-20230928-25-qakotc.jpg?ixlib=rb-1.1.0&rect=88%2C1424%2C4435%2C2217&q=45&auto=format&w=668&h=324&fit=crop',
            caption : 'Fiction',
            search : 'fiction'
        },
        {
            imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpzj0H8-V0nGkvMA9XRfItpjpc1oSKQ-GYQ&usqp=CAU',
            caption : 'Crime',
            search : 'crime'
        },
        {
            imgsrc : 'https://www.wcrf-uk.org/wp-content/uploads/2021/06/588595864r-LS.jpg',
            caption : 'Recipe Books',
            search : 'cooking'
        },
        {
          imgsrc : 'https://stat5.bollywoodhungama.in/wp-content/uploads/2023/07/1920-Horrors-of-the-Heart-Box-Office-Turns-out-to-be-a-sleeper-success-may-end-up-netting-Rs.-19.20-crores-all-languages-1-255x191.jpg',
          caption : 'Horror',
          search : 'horror'
      }
    ]
    const navigate = useNavigate();
    const handleViewCategory = (categoryId) => {
      navigate(`/viewcategory?category=${categoryId}`);
    };
  return (
    <>
      <div>
    <div className="flex flex-col justify-center items-center my-10 lg:my-20">
      <div
        className="bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3khFv3XMCT2T6TOBYHrO1BedaN2CEy-MEg&usqp=CAU')` }}
      >
        <h1 className="py-3 font-black text-4xl md:text-7xl bg-white mix-blend-lighten uppercase text-center">
          Choose Your Book
        </h1>
      </div>
    </div>
  </div> 
  
  
  <div className='flex justify-center items-center flex-wrap gap-10'>
  {category && category.map((item, index) => (
    <div key={index} className='relative bg-black w-96 md:w-72 h-72 rounded-md overflow-hidden'>
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${item.imgsrc}')` }}
      >
      </div>
      <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
          <p className="text-6xl font-bold text-white">{item.caption}</p>
          <button 
           onClick={()=>handleViewCategory(item.search)}
          className='text-white font-semibold text-base mt-8 rounded-lg py-1 px-2 hover:border-[1px] hover:border-white'>Explore Now <CallMadeIcon/> </button>
        </div>
      </div>
    </div>
  ))}
</div>


    

    </>
  )
}

export default Categories
