import FormAddList from "./FormAddList";

const NewList = ({ addList }) => {
    return (
        <section className="new-list">
            <div className="new-list-button">
                <p>Add new list</p>
                <img className="icon" src="/plusicon.png" alt="Plus icon" />
            </div>
            <FormAddList addList={addList} />
        </section>
    );
}

export default NewList;