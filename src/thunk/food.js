import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFoodsApi, postFoodsApi, getSelectedFoodsApi } from "../api"

const getFoods = createAsyncThunk(
  "foods/get",
  async(thunkApi) => {
    const response = await getFoodsApi()
    return response.data    
  }
)

const postFoods = createAsyncThunk(
  "foods/post",
  async(foods, thunkApi) => {
    const response = await postFoodsApi(foods)
    return response.data
  }
)

const getSelectedFoods = createAsyncThunk(
  "foods/get/selected",
  async(thunkApi) => {
    const response = await getSelectedFoodsApi()
    return response.data    
  }
)

export {
  getFoods,
  postFoods,
  getSelectedFoods
}