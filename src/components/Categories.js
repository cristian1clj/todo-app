import CategoryItem from "./CategoryItem";

const Categories = ({ categoryNames, deleteCategory, selectCategory }) => {
    return (
        <section className="list-container category-list">
            {
                categoryNames.length === 0
                ? <p>You dont have categories yet...</p>
                : categoryNames.map(name => <CategoryItem categoryName={name} deleteCategory={deleteCategory} selectCategory={selectCategory} />)
            }
        </section>
    );
}

export default Categories;