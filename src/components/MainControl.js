import Header from "./Header";
import ToDoLists from "./ToDoLists";
import NewList from "./NewList";

const MainControl = ({ toDo, setToDo }) => {
    return (
        <aside className="main-control">
            <Header />
            <ToDoLists toDo={toDo} />
            <NewList toDo={toDo} setToDo={setToDo} />
        </aside>
    );
}

export default MainControl;