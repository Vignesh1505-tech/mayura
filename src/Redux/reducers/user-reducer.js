import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    userdetails: [],
    dtoken: null,
    token:null,
    signin:false,
  },
  addtocart: {
    cart: []
  },
  likedproduct:{
    saved:[]
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserdetails:(state,action)=>{
      const details=action.payload
      state.userData.userdetails=details

    },
    addToken: (state, action) => {
      const token = action.payload;
      console.log(token, "toekn", action.payload, "payloads");
      // Update the token
      state.userData.dtoken = token;
    },
    addSignin:(state,action)=>{
      const signin=action.payload;
      state.userData.signin=signin;
    },
    addUsertoken:(state,action)=>{
      const userToken=action.payload;
      console.log("myuser'sToken",userToken)
      state.userData.token=userToken;
    },
    addTocart: (state, action) => {
        const product = action.payload;
        const existingProductIndex = state.addtocart.cart.findIndex(item => item.recno === product.recno);
      
        if (existingProductIndex !== -1) {
          // If the product already exists in the cart, update its count
          state.addtocart.cart[existingProductIndex].count = product.count;
        } else {
          // If the product doesn't exist, add it to the cart
          state.addtocart.cart.push(product);
        }
      },
      removeFromCart: (state, action) => {
        // Remove from cart logic here
        const recnoToRemove = action.payload.recno;
        state.addtocart.cart = state.addtocart.cart.filter(item => item.recno !== recnoToRemove);
    },
    resetCart: (state) => {
      // Reset cart to initial state (empty array)
      state.addtocart.cart = [];
    },
    likedproduct:(state,action)=>{
      const product=action.payload
      state.likedproduct.saved.push(product)
    },
    removefromsaved:(state,action)=>{
      const recnoToRemove = action.payload.recno;
      state.likedproduct.saved = state.likedproduct.saved.filter(item => item.recno !== recnoToRemove);
    }
    
      
  }
});

export const { addToken, addTocart,removeFromCart,addUsertoken,addUserdetails,resetCart,likedproduct,removefromsaved,addSignin } = userSlice.actions;
export default userSlice.reducer;
