import ToDoListItem from "./ToDoListItem";

const ToDoLists = ({ toDo }) => {
    return (
        <section className="todo-list">
            {
                toDo.length === 0
                ? <p>You dont have lists yet...</p>
                : toDo.map(list => <ToDoListItem listName={list} />)
            }
        </section>
    );
}

export default ToDoLists;