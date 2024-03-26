import Header from "./Header";
import Categories from "./Categories";
import NewCategory from "./NewCategory";
import { useState } from "react";

const SideControlMenu = ({ toDo, setToDo, setError, selectCategory }) => {
    const [searchedCategory, setSearchedCategory] = useState('');
    const categoryNames = searchedCategory !== '' ? 
                      toDo.filter(category => category.name.includes(searchedCategory)).map(category => category.name) : 
                      toDo.map(category => category.name);

    const addCategory = categoryName => {
        const newCategory = { name: categoryName, elements: [] }

        if (!toDo.some(category => category.name === categoryName)){
            setToDo([...toDo, newCategory]);
        } else {
            setError('Category name already exists');
        }
    }

    const deleteCategory = categoryName => {
        const newToDo = toDo.filter(category => category.name !== categoryName);
        setToDo(newToDo);
    }

    return (
        <aside className="side-control-menu">
            <Header setSearchedCategory={setSearchedCategory} />
            <Categories categoryNames={categoryNames} deleteCategory={deleteCategory} selectCategory={selectCategory} />
            <NewCategory addCategory={addCategory} />
        </aside>
    );
}

export default SideControlMenu;