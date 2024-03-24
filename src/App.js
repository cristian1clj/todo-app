import { useState } from 'react';
import './App.css';
import MainControl from './components/MainControl';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [toDo, setToDo] = useState([]);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <MainControl toDo={toDo} setToDo={setToDo} setError={setError} />
      { error !== '' ? <ErrorMessage error={error} setError={setError} /> : null }
    </div>
  );
}

export default App;
