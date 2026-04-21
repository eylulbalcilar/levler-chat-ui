import Button from "../components/button";
 import { Info } from "lucide-react";
 import { FaCheckSquare } from "react-icons/fa";


export default function Checklist() {
  return (
    <div>
      <h2>
          <Info size={25} />
        My Checklist
      </h2>
      <p>3 tasks remaining</p>

      <div>
        <span>
          < FaCheckSquare size={18} color="purple" />
          Workout
        </span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

          <div>
      <span>
       < FaCheckSquare size={18} color="purple" />
        Clean floors</span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

          <div>
      <span>
       < FaCheckSquare size={18} color="purple" />
        Cook dinner</span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

      <Button>Add task</Button>
    </div>
  );
}