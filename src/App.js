import { useState } from 'react';
import './App.css';
import SideControlMenu from './components/SideControlMenu';
import MainControl from './components/MainControl';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [toDo, setToDo] = useState([]);
  const [error, setError] = useState('');
  const [currentCategory, setCurrentCategory] = useState(null);

  const selectCategory = (categoryName, isDeleting=false) => {
    if (!isDeleting){
      setCurrentCategory(toDo.find(category => category.name === categoryName));
    } else {
      if (currentCategory !== null){
        currentCategory.name === categoryName && (setCurrentCategory(null));
      }
    }
  }

  return (
    <div className="App">
      <SideControlMenu toDo={toDo} setToDo={setToDo} setError={setError} selectCategory={selectCategory} />
      { currentCategory !== null ? <MainControl setToDo={setToDo} category={currentCategory} /> : null }
      { error !== '' ? <ErrorMessage error={error} setError={setError} /> : null }
    </div>
  );
}

export default App;