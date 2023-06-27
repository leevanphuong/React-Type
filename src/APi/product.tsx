import { ICar } from '@/interface/Cars'
import axios from 'axios'

const product = axios.create({
    baseURL: ' http://localhost:3000/cars'
})
export const getAll=()=>{
   return product.get('/')
}
export const removeItem=(id:number)=>{
    return product.delete(`/${id}`)
}
export const addProduct=(car: ICar)=>{
    return product.post('',car)
}
export const UpdateItem=(car: ICar)=>{
    return product.put(`/${car.id}`,car)
}