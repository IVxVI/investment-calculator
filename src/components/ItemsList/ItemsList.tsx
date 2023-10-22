import { Appointment } from "../../types/Appointment"
import ListItem from "../ListItem/ListItem"

type Props = {
  appointments: Appointment[]
}

export default function ItemsList({appointments} : Props) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {appointments.map((person) => (
        <ListItem key={person.email} person={person} />
      ))}
    </ul>
  )
}
