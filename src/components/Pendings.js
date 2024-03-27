import PendingItem from "./PendingItem";

const Pendings = ({ pendings, updatePendingState, deletePending }) => {
    return (
        <section className="list-container pending-list">
            {
                pendings.length === 0
                ? <p>You dont have pendings yet...</p>
                : pendings.map(pending => <PendingItem pending={pending} updatePendingState={updatePendingState} deletePending={deletePending} />)
            }
        </section>
    );
}

export default Pendings;