import React,{useState,useEffect} from 'react'
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const SubTotal = ({cartItemsArr}) => {
    const[emi,setemi] = useState(false);
    const [total,setTotal] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        cartItemsArr.forEach((item) => {
          const price = parseFloat(item.price.replace('$', ''));
          const quantity = parseFloat(item.quantity);
          totalPrice += price * quantity;
        });
        const roundedTotal = totalPrice.toFixed(2);
        setTotal(roundedTotal);
      }, [cartItemsArr]);
  return (
    <>
      <div className='w-[60%] md:w-[25%] my-10 mx-auto'>
      <div className='flex justify-center gap-2'>
        <BeenhereRoundedIcon className='text-[#24715b]'/>
        <div><p className='text-sm text-[#24715b] font-semibold flex'> Your order qualifies for FREE Shipping Choose this option at checkout. See details....</p></div>
      </div>
      <div className='flex justify-center'>
        <p className='font-semibold mt-5'>Subtotal : <span className='font-extrabold'>$ {total}</span></p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-[#24715b] text-white hover:bg-white w-[90%] rounded-md my-5 hover:border-[#24715b] hover:text-[#24715b] hover:border-[2px] font-semibold text-sm p-1'>Proceed to Buy</button>
      </div>
      <div className='flex justify-center'>
            <div className=' w-[90%] border-[1px] border-gray-300 py-2 px-3' onClick={()=>setemi(!emi)}>
            <span className='text-base'>EMI Available</span>
            <KeyboardArrowDownRoundedIcon className='float-right'/>
            {
                emi && (
                    <div className='my-3'>
                    <p className='text-sm'>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).<span className='text-[#24715b] hover:underline font-semibold'> Learn more</span></p>
                </div>
                )
            }
            </div>
      </div>
    </div>
    </>
  )
}

export default SubTotal
