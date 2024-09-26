import { BSONType, ObjectId } from 'mongodb'

export const Pelicula = {
    _id: ObjectId,
  nombre: String,
  géneros: Array,
  anioEstreno: Number
}