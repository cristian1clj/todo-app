import FormAddList from "./FormAddList";

const NewList = ({ toDo, setToDo }) => {
    return (
        <section className="new-list">
            <FormAddList />
            <div className="new-list-button">
                <p>Add new list</p>
                <img className="icon" src="/plusicon.png" alt="Plus icon" />
            </div>
        </section>
    );
}

export default NewList;