import axios from 'axios'
const baseUrl = 'http://localhost:8000'

const getFoodsApi = () => {
  const endpoint = `${baseUrl}/foods`
  return axios.get(endpoint)
}

const postFoodsApi = (foods) => {
  const endpoint = `${baseUrl}/foods`
  return axios.post(endpoint,{foods})
}

const getSelectedFoodsApi = () => {
  const endpoint = `${baseUrl}/foods/selected`
  return axios.post(endpoint)
}

export {
  getFoodsApi,
  postFoodsApi,
  getSelectedFoodsApi
}