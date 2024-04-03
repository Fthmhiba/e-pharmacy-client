import { Card } from '@mui/material'
import React from 'react'

function StartShopping() {
    

    const Shopping = [
        {
            image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
            prdctName:"Foley Catheter",
            price:"$12.90"
        },
        {
            image:"https://img.lovepik.com/free-png/20211216/lovepik-hand-drawn-thermometer-png-image_401695408_wh1200.png",
            prdctName:"Thermometer",
            price:"$8.90"
        },
        {
            image:"https://www.oxyaider.co.za/wp-content/uploads/2021/11/Made-of-medical-grade-PVC-.-1.png",
            prdctName:"Mask",
            price:"$12.90"
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/024/286/063/non_2x/wound-dressing-plaster-free-png.png",
            prdctName:"Wound Dressing",
            price:"$24.90"
        }
    ]

    
  return (
    <>
        <div className="flex flex-wrap justify-center">
            {
                Shopping.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[130px] sm:w-[250px] h-fit m-5'>
                            <div className="bg-slate-500">
                                <img className='' src={item.image} alt="Loading..." />
                            </div>
                            <div className="border p-2">
                                <p className='text-xs sm:text-xl font-bold'>{item.prdctName}</p>
                                <p className='text-xs sm:text-base'>{item.price}</p>
                            </div>
                            <div className="">
                                <button className='bg-teal-900 text-white text-xs sm:text-base rounded w-full py-2'>Add to Cart</button>
                            </div>
                        </Card>
                        </>
                    )
                })
            }
        </div>



        
    </>
  )
}

export default StartShopping