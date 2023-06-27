import { ICar } from '@/interface/Cars'
type ItemsProps = {
  getAll: ICar[],
  removes: Function
}
const Items = (props: ItemsProps) => {
  return (
    <tbody>
    {props.getAll.map((item) => (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <button className="btn-danger btn me-3" onClick={() => props.removes(item.id)}>
            Xoa
          </button>
          <button className="btn-warning btn"><a href={"update/"+item.id}>Edit</a></button>
        </td>
      </tr>
    ))}
  </tbody>
  )
}

export default Items