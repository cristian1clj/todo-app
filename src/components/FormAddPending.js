import { useState } from "react";

const FormAddPending = ({ addPending }) => {
    const [newPending, setNewPending] = useState('');

    const handleForm = e => {
        e.preventDefault();

        if (newPending !== ''){
            addPending(newPending);
            setNewPending('');
        }
    }

    return (
        <form className="form-add-pending one-line-form" onSubmit={handleForm}>
            <input 
                value={newPending} 
                onChange={e => setNewPending(e.target.value)}
                type="text" 
                placeholder="new pending..." 
            />
            <button type="submit">
                <img className="icon" src="/plusicon.png" alt="plus icon" />
            </button>
        </form>
    );
}

export default FormAddPending;