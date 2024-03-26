const PendingItem = ({ pending, deletePending }) => {
    const handleDeleteButton = e => {
        deletePending(pending);
    }

    return (
        <div className="item-container pending-item">
            <input type="checkbox" />
            <p>{ pending.description }</p>
            <button type="button" onClick={handleDeleteButton}>
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div>
    );
}

export default PendingItem;