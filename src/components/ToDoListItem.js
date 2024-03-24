const ToDoListItem = ({ listName }) => {
    return (
        <div className="todo-list-item">
            <p>{ listName }</p>
            <button type="button">
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div>
    );
}

export default ToDoListItem;