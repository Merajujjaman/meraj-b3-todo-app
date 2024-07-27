import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Button } from "../ui/button";

type TCardProp = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TCardProp) => {

  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();


  const handleToggle = () => {
    const option = {
      id: _id,
      data: {
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      },
    };

    updateTodo(option);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  return (
    <div className=" flex justify-between bg-white items-center rounded-lg p-3 border ">
      <input
        className="mr-2"
        onChange={handleToggle}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        defaultChecked= {isCompleted === true}
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-1">
        <div
          className={`size-2 rounded-full 
          ${priority === "High" ? "bg-red-500" : ""}
          ${priority === "Medium" ? "bg-yellow-500" : ""}
          ${priority === "Low" ? "bg-green-500" : ""}
          `}
        ></div>
        <p className="font-semibold ">{priority}</p>
      </div>
      <div className="font-semibold flex-1">
        {isCompleted ? (
          <p className="text-blue-500">Done</p>
        ) : (
          <p className="text-pink-500">Painding</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-3">
        <Button>Edite</Button>
        <Button onClick={()=>handleDelete(_id)} className="bg-red-300">Delete</Button>
      </div>
    </div>
  );
};

export default TodoCard;
