import { ICar } from "@/interface/Cars"
import Items from "../Items"
type ListProps = {
    CarArr: ICar[],
    remove: Function,
}

const List = (props: ListProps) => {
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
      <Items getAll={props.CarArr} removes={props.remove}/>
</table>
    </div>

  )
}

export default List