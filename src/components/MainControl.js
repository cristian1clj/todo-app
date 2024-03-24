import Header from "./Header";
import ToDoLists from "./ToDoLists";
import NewList from "./NewList";

const MainControl = ({ toDo, setToDo, setError }) => {
    const listNames = toDo.map(list => list.name);

    const addList = listName => {
        const newList = { name: listName, elements: [] }

        if (!toDo.some(list => list.name === listName)){
            setToDo([...toDo, newList]);
        } else {
            setError('List name already exists');
        }
    }

    const deleteList = listName => {
        const newToDo = toDo.filter(list => list.name !== listName);
        setToDo(newToDo);
    }

    return (
        <aside className="main-control">
            <Header />
            <ToDoLists listNames={listNames} deleteList={deleteList} />
            <NewList addList={addList} />
        </aside>
    );
}

export default MainControl;