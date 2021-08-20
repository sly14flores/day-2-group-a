import { useSelector } from "react-redux"
import './Selected.css'

const Selected = () => {

  const selectedFoods = useSelector(state => state.food.selectedFoods)

  return (
    <div className="selected">
      <table>
        <thead>
          <tr><th>Name</th></tr>
        </thead>
        <tbody>
          {
            selectedFoods.map(food => (
              <tr><td>{food}</td></tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default Selected