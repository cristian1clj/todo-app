const ToDoListItem = ({ listName, deleteList }) => {
    const handleDeleteButton = e => {
        if (window.confirm('Are you sure? All items attached to this list will be losed')){
            deleteList(listName);
        }
    }

    return (
        <div className="todo-list-item">
            <p>{ listName }</p>
            <button type="button" onClick={handleDeleteButton}>
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div>
    );
}

export default ToDoListItem;