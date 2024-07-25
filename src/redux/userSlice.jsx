import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    items:[],
    itemsInShop:[],
    
}

export const getAllData= createAsyncThunk('datas',async()=>{
    const api='https://fakestoreapi.com/products'
    const response= await axios.get(api)
    return response.data
})



export const  userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
       
        addItem:(state,action)=>{
            state.itemsInShop.push(action.payload)
        }
    },extraReducers:(builder)=>{
        builder.addCase(getAllData.fulfilled,(state,action)=>{
            state.items=action.payload
        })
    }
})

export const{addItem}=userSlice.actions
export default userSlice.reducer
