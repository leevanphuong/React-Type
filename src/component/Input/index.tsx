import Button from "../Button"
import { useState } from "react"
type InputProps = {
  addItem: Function
}
const Input = (props: InputProps) => {
  const [input, setInput]=useState({name: "", price: ""})
const Handlesubmit=(e:any)=>{
  e.preventDefault()
  props.addItem(input)
  setInput({name:"", price:""})
}
const handChange= (e:any)=>{
  const {name, value} = e.target;
  setInput(prevInput => ({...prevInput, [name]: value}))
}
  return (
    <form action="" onSubmit={Handlesubmit}>
    <div className="mb-3">
    <label className="mb-3">Name Car</label>
    <input type="text" onChange={handChange} value={input.name} className="form-control" name="name"/>
  </div>
   <div className="mb-3">
   <label className="mb-3">Price Car</label>
   <input type="number" onChange={handChange}  value={input.price} className="form-control" name="price"/>
 </div>
 <Button>Add</Button>
 </form>
  )
}

export default Input