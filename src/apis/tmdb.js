import { tmdbConfig } from '../../permissions'

const BASE_URL = tmdbConfig.api_base_url
const API_KEY = tmdbConfig.api_key
const IMG_URL = tmdbConfig.image_base_url

const getImageURL = () => {
  return IMG_URL
}

const getMovie = async (id) => {
  let data = null
  try {
    const response = await fetch(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    const responseData = await response.json()
    data = responseData
  } catch (error) {
    console.log(error)
  }
  return data
}

const getMovieImages = async (id) => {
  let data = null
  try {
    const response = await fetch(
      `${BASE_URL}movie/${id}/images?api_key=${API_KEY}&language=en`
    )
    const responseData = await response.json()
    data = responseData
  } catch (error) {
    console.log(error)
  }
  return data
}

export { getMovie, getMovieImages, getImageURL }
