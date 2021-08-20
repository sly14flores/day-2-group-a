import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/foodSlice'

const QueueFoods = () => {

  const dispatch = useDispatch()

  const removeFood = (food) => {
    dispatch(remove(food))
  }

  const foods = useSelector(state => state.food.queueFoods)
  const displayFoods = foods.map((food, i) => (
    <tr key={i}>
      <td>{food}</td>
      <td><button onClick={() => removeFood(food)}>Remove</button></td>
    </tr>
  ))

  return (
    <>
      {displayFoods}
    </>
  )
}

export default QueueFoods