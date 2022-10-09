import { MAIN_URL } from './index'
import { SerializerProps } from '../types'

export const serializer = (data: SerializerProps) => {

  for (const dataKey in data) {
    // @ts-ignore
    if (data[dataKey] === 'undefined') {
      // @ts-ignore
      data[dataKey] = undefined
    }
  }
  if (typeof data.children === 'string') {
    data.children = data.children.split(',')
  }
  if (typeof data.brothers === 'string') {
    data.brothers = data.brothers.split(',')
  }
  if (typeof data.sisters === 'string') {
    data.sisters = data.sisters.split(',')
  }

  if (data.image) {
    data.image = `${MAIN_URL}${data.image}`
  } else {
    data.image = `${MAIN_URL}uploads/no-photo-available.jpeg`
  }
}