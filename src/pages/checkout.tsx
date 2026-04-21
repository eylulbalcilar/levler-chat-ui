import Button from "../components/button";

export default function Checklist() {
  return (
    <div>
      <h2>My Checklist</h2>
      <p>3 tasks remaining</p>

      <div>
        <span>Workout</span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

          <div>
      <span>Clean floors</span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

          <div>
      <span>Cook dinner</span>
        <Button variant="neutral">Edit</Button>
        <Button variant="subtle">Delete</Button>
      </div>

      <Button>Add task</Button>
    </div>
  );
}