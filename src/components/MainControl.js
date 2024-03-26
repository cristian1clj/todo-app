import Pendings from "./Pendings";
import FormAddPending from "./FormAddPending";

const MainControl = ({ setToDo, category }) => {
    const pendings = [
        { description: 'tender la cama', completed: false },
        { description: 'cepillar dintes', completed: false },
        { description: 'comer', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'aprender React', completed: false },
        { description: 'tender la cama', completed: false }
    ]

    return (
        <section className="main-control">
            <h2>{ category.name.toUpperCase() }</h2>
            <Pendings pendings={pendings} />
            <FormAddPending />
        </section>
    );
}

export default MainControl;