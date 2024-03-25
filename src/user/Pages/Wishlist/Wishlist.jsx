import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  //  add 
  const addToWishlist = (item) => {
    if (!wishlistItems.find((i) => i.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  // remove 
  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              {item.name} - <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
