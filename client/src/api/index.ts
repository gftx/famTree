import axios from 'axios'
import { serializer } from './serializer'

const MAIN_URL: string | undefined = process.env.REACT_APP_MAIN_URL

class Api {
  url: string | undefined

  constructor(url: string | undefined) {
    this.url = url
  }

  getPersons = async () => {
    const res = await axios({
      method: 'GET',
      url: `${this.url}api/persons`,
    })

    for (const el of res.data.data) {
      serializer(el)
    }
    return res
  }

  postPerson = async (values: any) => {
    let result
    try {
      result = await axios.post(`${this.url}api/persons`, values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: [function(data) {
          return data
        }],
        onUploadProgress: progressEvent => {
          const complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
          console.log('complete: ', complete)
        },
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }

  deletePerson = async (id: number) => {
    try {
      return await axios({
        method: 'DELETE',
        url: `${this.url}api/persons`,
        data: { id: id },
      })
    } catch (error) {
      return {
        error: error,
      }
    }
  }

  updatePerson = async (values: any) => {
    let result
    try {
      result = await axios.put(`${this.url}api/persons`, values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: [function(data) {
          return data
        }],
        onUploadProgress: progressEvent => {
          const complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
          console.log('complete: ', complete)
        },
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }
}

const api = new Api(MAIN_URL)

export { api, MAIN_URL }