import ToDoListItem from "./ToDoListItem";

const ToDoLists = ({ listNames, deleteList }) => {
    return (
        <section className="todo-list">
            {
                listNames.length === 0
                ? <p>You dont have lists yet...</p>
                : listNames.map(name => <ToDoListItem listName={name} deleteList={deleteList} />)
            }
        </section>
    );
}

export default ToDoLists;