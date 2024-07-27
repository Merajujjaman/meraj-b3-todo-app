/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
    // const {todos} = useAppSelector((state) => state.todos)
    const [priority, setPriority] = useState('')
    console.log(priority);
    const {data: todos, isLoading} = useGetTodoQuery(priority)
    if(isLoading){
      return <div>loading...</div>
    }
  return (
    <div >
      <div className="flex justify-between mb-5">
        <TodoModal></TodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="w-full bg-green-400 rounded-lg p-1">
        <div className="space-y-3 p-2 rounded-lg bg-white">
          {
            todos?.data?.map((item : any) => <TodoCard key={item.id} {...item}></TodoCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
