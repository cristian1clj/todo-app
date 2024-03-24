import FormAddList from "./FormAddList";

const NewList = ({ setToDo, setError }) => {
    return (
        <section className="new-list">
            <div className="new-list-button">
                <p>Add new list</p>
                <img className="icon" src="/plusicon.png" alt="Plus icon" />
            </div>
            <FormAddList setToDo={setToDo} setError={setError} />
        </section>
    );
}

export default NewList;