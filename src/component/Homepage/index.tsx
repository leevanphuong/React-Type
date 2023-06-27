import { ICar } from '@/interface/Cars'
import { Input,List } from '..'

type HomeProps = {
  get: ICar[],
  removes: Function,
  add: Function
}
const HomePage = (props: HomeProps) => {
  return (
    <div className="App">
          <Input addItem={props.add}/>
        <List CarArr={props.get} remove={props.removes}/>
        </div>
  )
}

export default HomePage