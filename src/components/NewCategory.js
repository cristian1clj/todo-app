import FormAddCategory from "./FormAddCategory";

const NewCategory = ({ addCategory }) => {
    return (
        <section className="new-category">
            <div className="new-category-button">
                <p>Add new category</p>
                <img className="icon" src="/plusicon.png" alt="Plus icon" />
            </div>
            <FormAddCategory addCategory={addCategory} />
        </section>
    );
}

export default NewCategory;