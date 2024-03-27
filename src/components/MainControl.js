import Pendings from "./Pendings";
import FormAddPending from "./FormAddPending";

const MainControl = ({ toDo, setToDo, currentCategory, setError }) => {
    const addPending = (pendingDescription) => {
        if (!currentCategory.elements.some(element => element.description === pendingDescription)){
            const newPending = { description: pendingDescription, completed: false }
            currentCategory.elements = [...currentCategory.elements, newPending];

            const newToDo = toDo.map(category => {
                if (category.name === currentCategory.name){
                    return currentCategory;
                }
                return category;
            });

            setToDo(newToDo);
        } else {
            setError('Pending already exists');
        }
    }

    const updatePendingState = (pending) => {
        currentCategory.elements = currentCategory.elements.map(element => {
            if (element.description === pending.description){
                return pending;
            } else {
                return element;
            }
        });

        const newToDo = toDo.map(category => {
            if (category.name === currentCategory.name){
                return currentCategory;
            }
            return category;
        });

        setToDo(newToDo);
    }

    const deletePending = (pendingDescription) => {
        currentCategory.elements = currentCategory.elements.filter(element => element.description !== pendingDescription);

        const newToDo = toDo.map(category => {
            if (category.name === currentCategory.name){
                return currentCategory;
            }
            return category;
        });

        setToDo(newToDo);
    }

    return (
        <section className="main-control">
            <h2>{ currentCategory.name.toUpperCase() }</h2>
            <Pendings pendings={currentCategory.elements} updatePendingState={updatePendingState} deletePending={deletePending} />
            <FormAddPending addPending={addPending} />
        </section>
    );
}

export default MainControl;