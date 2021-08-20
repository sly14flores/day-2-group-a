import { useState, useEffect } from "react"
import { getFoods, postFoods } from "../../thunk/food"
import { useDispatch, useSelector } from "react-redux"
import './Search.css'

import Foods from './Foods'
import QueueFoods from './QueueFoods'

const Search = () => {

  const dispatch = useDispatch()
  const [filter, setFilter] = useState("")

  const foods = useSelector(state => state.food.foods)
  const queueFoods = useSelector(state => state.food.queueFoods)

  useEffect(() => {
    dispatch(getFoods())
  },[])

  const handleChange = (e) => {
    // dispatch(getFoods())
    setFilter(e.target.value)
  }

  const submitFoods = () => {
    dispatch(postFoods(queueFoods))
  }

  return (
    <div className="container">
      <div className="search">
        <input className="filter" placeholder="Search" type="text" value={filter} onChange={handleChange} />
        <table className="foods">
          <thead>
            <tr>
              <th>Name</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            <Foods foods={foods} filter={filter} />
          </tbody>
        </table>
      </div>
      <div className="selected-foods">
        <h2>Selected Foods</h2>
        <table className="foods">
          <thead>
            <tr>
              <th>Name</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            <QueueFoods />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <button onClick={submitFoods}>Submit</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Search