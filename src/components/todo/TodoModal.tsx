import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";

const TodoModal = () => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] =useState('')

  //for local state:
  // const dispatch = useAppDispatch()

  /* for server */
  const [addTodo,] = useAddTodoMutation();

  // console.log(addTodo, data, isLoading, isError);

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomId = Math.random().toString(36).substring(2, 7)
    const todoDetails = {
      title: todo,
      description,
      isCompleted: false ,
      priority
    };

    /* for local state */
    // dispatch(addTodo(todoDetails))

    /* for server */
    console.log("inside modal =>", todoDetails);
    addTodo(todoDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add your task</DialogTitle>
          <DialogDescription>
            The task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handelSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTodo(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogClose asChild className=" flex justify-end">
            <Button type="submit">Add to list</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
