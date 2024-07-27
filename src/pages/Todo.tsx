import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-2xl font-semibold text-center pt-10 pb-5">My Todo</h1>
           <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;