import Header from "./Header";
import ToDoLists from "./ToDoLists";
import NewList from "./NewList";

const MainControl = ({ toDo, setToDo, setError }) => {
    return (
        <aside className="main-control">
            <Header />
            <ToDoLists toDo={toDo} />
            <NewList setToDo={setToDo} setError={setError} />
        </aside>
    );
}

export default MainControl;