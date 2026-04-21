import Button from "./button";

export default {
  title: "UI/Button",
  component: Button,
};

export const AddTask = () => (
  <Button variant="primary">Add task</Button>
);

export const Edit = () => (
  <Button variant="neutral">Edit</Button>
);

export const Delete = () => (
  <Button variant="subtle">Delete</Button>
);