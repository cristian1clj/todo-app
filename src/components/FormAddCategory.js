import { useState } from "react";

const FormAddCategory = ({ addCategory }) => {
    const [categoryName, setCategoryName] = useState('');

    const handleForm = e => {
        e.preventDefault();

        if (categoryName !== ''){
            addCategory(categoryName);
            setCategoryName('');
        }
    }

    return (
        <form className="form-add-category one-line-form" onSubmit={handleForm}>
            <input 
                value={categoryName} 
                onChange={e => setCategoryName(e.target.value)}
                type="text" 
                placeholder="category name..." 
            />
            <button type="submit">
                <img className="icon" src="/plusicon.png" alt="plus icon" />
            </button>
        </form>
    );
}

export default FormAddCategory;