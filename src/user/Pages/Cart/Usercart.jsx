import { useState } from "react"

function Usercart() {
    const [cart, setCart] = useState([])

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };


    return (
        <>
            <h2 className="p-4 text-center text-lg">Your Cart</h2>
                {/* {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
          
        </ul>

      )} */}
            <div className="w-[600px] m-auto rounded bg-teal-600 text-white">

                <div className="flex  ">
                    <img className='p-1 img-thumbnail w-32 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfURLHhSWlBpvH4Q6KaHTiSjkeLY5DLUQM_1rdzkdPxtcTNxZIFI8nLoVCYCB9EWMqSWw&usqp=CAU" alt="" />
                    <div className="border-t-2 p-1">
                        <p> Foley Catheter </p>
                        <p> $12.90 </p><span>in Stock</span>
                    </div>
                    <div className="flex">
                        <button className="text-black"><span>-</span>0 <span>+</span> </button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usercart