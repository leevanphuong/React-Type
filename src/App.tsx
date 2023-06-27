import { Route, Routes } from 'react-router-dom'
import "./App.css";
import HomePage from './component/Homepage';
import { ICar } from '@/interface/Cars'
import { UpdateItem, addProduct, getAll, removeItem } from '@/APi/product'
import { useEffect, useState } from 'react'
import Update from './component/Update';
function App() {
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    getAll().then(({ data }) => setCars(data))
  }, [])

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  const addCar = (car: ICar) => {
    addProduct(car).then(()=>setCars([...cars, car]))
  };
  const removeCar = (id: number) => {
    const check = confirm("Ban co muon xoa")
    if(check){
      removeItem(id).then(()=> setCars(cars.filter((item)=> item.id != id)))
    }
  };
  const updateCar = (car: ICar) => {
    UpdateItem(car).then(()=> setCars(cars.map((item)=>{
      if(item.id == car.id){
        return car
      }
      else{
        return item
      }
    })))
  };
  const fetchCars = () => {};
    return (
      <Routes>
        <Route path='/' element={<HomePage get={cars} removes={removeCar} add={addCar} /> } />
        <Route path='update/:id' element={<Update update={updateCar} get={cars}/>}/>
      </Routes>
    );
}

export default App;