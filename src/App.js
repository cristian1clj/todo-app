import { useState } from 'react';
import './App.css';
import MainControl from './components/MainControl';

function App() {
  const [toDo, setToDo] = useState(['arroz', 'pizza', 'perro', 'universidad', 'universidad', 'universidad', 'universidad', 'universidad']);

  return (
    <div className="App">
      <MainControl toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
