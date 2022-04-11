import { tmdbConfig } from '../../permissions'
import axios from 'axios'

const api_base_url = tmdbConfig.api_base_url
const api_key = tmdbConfig.api_key
const image_base_url = tmdbConfig.image_base_url

const api = axios.create({ baseURL: api_base_url })

const getImage = (id) => {
  return image_base_url + id
}

const getMovie = async (id) => {
  const response = await api.get(`movie/${id}`, {
    params: { api_key, language: 'en-US' },
  })
  return response.data
}

const getCast = async (id) => {
  const response = await api.get(`movie/${id}/credits`, {
    params: { api_key, language: 'en-US' },
  })
  return response.data
}

const getVideos = async (id) => {
  const response = await api.get(`movie/${id}/videos`, {
    params: { api_key, language: 'en-US' },
  })
  return response.data
}

export { getMovie, getImage, getCast, getVideos }
