import { createSlice } from '@reduxjs/toolkit'
import { getFoods, getSelectedFoods, postFoods } from '../thunk/food'

const initialState = {
  foods: [],
  queueFoods: [],
  selectedFoods: []
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    queue: (state, action) => {
      const i = state.queueFoods.findIndex(q => q===action.payload)
      if (i < 0) state.queueFoods.push(action.payload)
    },
    remove: (state, action) => {
      const i = state.queueFoods.findIndex(q => q===action.payload)
      const queueFoods = [...state.queueFoods]
      console.log(i)
      if (i >= 0) {
        queueFoods.splice(i, 1)
        state.queueFoods = [...queueFoods]
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getFoods.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log(action)
      const { data } = action.payload
      state.foods = [...data]
    })

    builder.addCase(getSelectedFoods.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log(action)
      const { data } = action.payload
      state.selectedFoods = [...data]
    })

    builder.addCase(postFoods.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log(action)
      const { data } = action.payload
      state.selectedFoods = [...data]
    })
    
  }  
})

export const { queue, remove } = foodSlice.actions

export default foodSlice.reducer