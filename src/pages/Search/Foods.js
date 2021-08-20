import { useDispatch } from "react-redux"
import { queue } from '../../redux/foodSlice'

const Foods = ({ foods, filter }) => {

  const dispatch = useDispatch()

  const addFood = (food) => {
    dispatch(queue(food))
  }

  const displayFoods = foods.filter(food => (filter==="")?true:food.toLowerCase().includes(filter.toLowerCase()))
    .map((food,i) => (
      <tr key={i}>
        <td>{food}</td>
        <td>
          <button onClick={() => addFood(food)}>Add</button>
        </td>
      </tr>
    ))  

  return (
    <>
      {displayFoods}
    </>
  )

}

export default Foods