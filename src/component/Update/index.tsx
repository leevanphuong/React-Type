import React,{useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Button  from '../Button'
import { ICar } from '@/interface/Cars'
type Props = {
    update: Function
    get: ICar[]
}

const Update = (props: Props) => {
  const {id} = useParams()
  const naviga = useNavigate()
  const {register, handleSubmit, reset}=useForm()
  useEffect(()=>{
   const restCar = props.get.find((item:any)=> item.id == id)
   reset(restCar)
  },[props])
  const submit =(data:any)=>{
    props.update(data)
    naviga('/')
  }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label htmlFor="">tên sản phẩm</label>
          <input type="text" className="form-control" {...register('name')} />
        </div>
        <div className="form-group">
          <label htmlFor="">tên sản phẩm</label>
          <input type="number" className="form-control" {...register('price')} />
        </div>
        <Button>Edit</Button>
        </form>
    </div>
  )
}

export default Update