const PendingItem = ({ pending, updatePendingState, deletePending }) => {
    const handleCheckbox = e => {
        pending.completed = !pending.completed;
        updatePendingState(pending);
    }

    const handleDeleteButton = e => {
        deletePending(pending.description);
    }

    return (
        <div className={`item-container ${pending.completed ? 'completed-item' : 'pending-item'}`}>
            <input 
                type="checkbox" 
                checked={pending.completed} 
                onClick={handleCheckbox}
            />
            <p>{ pending.description }</p>
            <button type="button" onClick={handleDeleteButton}>
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div>
    );
}

export default PendingItem;