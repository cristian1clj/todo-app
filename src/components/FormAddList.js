import { useState } from "react";

const FormAddList = ({ addList }) => {
    const [listNameValue, setListNameValue] = useState('');

    const handleAddListForm = e => {
        e.preventDefault();

        if (listNameValue !== ''){
            addList(listNameValue);
            setListNameValue('');
        }
    }

    return (
        <form className="form-add-list one-line-form" onSubmit={handleAddListForm}>
            <input 
                value={listNameValue} 
                onChange={e => setListNameValue(e.target.value)}
                type="text" 
                placeholder="list name..." 
            />
            <button type="submit">
                <img className="icon" src="/plusicon.png" alt="plus icon" />
            </button>
        </form>
    );
}

export default FormAddList;