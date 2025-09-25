import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = 'https://food-del-backend-p7zz.onrender.com';

  const [food_list, setFoodList] = useState([]);

  const [token, setToken] = useState('');

  const [showLogin, setShowLogin] = useState(false)

//   const addToCart = async(itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token){
//       await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
//   }
// };

const addToCart = async (itemId) => {
  let updatedCart;
  if (!cartItems[itemId]) {
    updatedCart = { ...cartItems, [itemId]: 1 };
  } else {
    updatedCart = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
  }
  setCartItems(updatedCart);

  if (!token) {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  if (token) {
    await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
  }
};

// const removeFromCart = async(itemId) => {
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))  
//     if (token) {
//         await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
//     }
// }  
const removeFromCart = async (itemId) => {
  let updatedCart;
  if (cartItems[itemId] === 1) {
    updatedCart = { ...cartItems };
    delete updatedCart[itemId];``
  } else {
    updatedCart = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
  }
  setCartItems(updatedCart);

  

  if (!token) {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  if (token) {
    await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
  }
};
const getTotalCartAmount=()=>{
  let totalAmount =0;
  for(const item in cartItems)
      {
          if(cartItems[item]>0){
          let itemInfo=food_list.find((product)=>product._id===item)
          totalAmount+=itemInfo.price*cartItems[item];
          }
      }
      return totalAmount;
}


  const fetchFoodList=async ()=>{
    const response= await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
}

const loadCartData = async (token) => {
  const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
  setCartItems(response.data.cartData);
}

// 🟢 Merge local cart with backend cart when user logs in
  const mergeLocalCartWithBackend = async (token) => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      const parsedCart = JSON.parse(localCart);

      // Local cart items ko backend mai add karo
      for (const itemId in parsedCart) {
        const quantity = parsedCart[itemId];
        for (let i = 0; i < quantity; i++) {
          await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
      }

      // Backend se fresh cart fetch karo
      await loadCartData(token);

      // localStorage cart clear karo
      localStorage.removeItem("cart");
    }
  };



  // useEffect(() => {
  //   async function loadData() {
  //     await fetchFoodList();
  //     if (localStorage.getItem('token')) {
  //       setToken(localStorage.getItem('token'));
  //       await loadCartData(localStorage.getItem("token"));
  //     }
  //   }
  //   loadData();
  // }, []);

 // 🟢 First load: food list + cart
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      } else {
        // login nahi hai to localStorage se cart load karo
        const localCart = localStorage.getItem("cart");
        if (localCart) {
          setCartItems(JSON.parse(localCart));
        }else {
        setCartItems({}); // empty object so nothing breaks
      }
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (token) {
      loadCartData(token);
       mergeLocalCartWithBackend(token);
    }
  }, [token]);

  const contextValue = {  
    food_list,  
    cartItems,  
    setCartItems,  
    addToCart,  
    removeFromCart  ,
    getTotalCartAmount,
    url,
    token,
    setToken,
     showLogin,
        setShowLogin,

} 
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
