const CategoryItem = ({ categoryName, deleteCategory, selectCategory }) => {
    const handleSelectCategory = e => {
        selectCategory(categoryName);
    }

    const handleDeleteButton = e => {
        e.stopPropagation();
        if (window.confirm('Are you sure? All items attached to this category will be losed')){
            selectCategory(categoryName, true);
            deleteCategory(categoryName);
        }
    }

    return (
        <div className="item-container category-item" onClick={handleSelectCategory}>
            <p>{ categoryName }</p>
            <button type="button" onClick={handleDeleteButton}>
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div>
    );
}

export default CategoryItem;