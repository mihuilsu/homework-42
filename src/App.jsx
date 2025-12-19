import { useState } from 'react';
import DataFetcher from './components/DataFetcher';
import './App.css';

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(1);

  const handleUserChange = (e) => {
    setSelectedUserId(Number(e.target.value));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>React Data Fetcher</h1>
        <p>Демонстрація асинхронного завантаження даних</p>
      </header>

      <div className="controls">
        <label htmlFor="userSelect">
          Оберіть користувача (для рефетчу):
        </label>
        <select 
          id="userSelect" 
          value={selectedUserId} 
          onChange={handleUserChange}
          className="user-select"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
            <option key={id} value={id}>
              Користувач {id}
            </option>
          ))}
        </select>
      </div>

      <DataFetcher userId={selectedUserId} />
    </div>
  );
};

export default App;