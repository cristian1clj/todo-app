import PendingItem from "./PendingItem";

const Pendings = ({ pendings, deletePending }) => {
    return (
        <section className="list-container pending-list">
            {
                pendings.length === 0
                ? <p>You dont have pendings yet...</p>
                : pendings.map(pending => <PendingItem pending={pending} deletePending={deletePending} />)
            }
        </section>
    );
}

export default Pendings;