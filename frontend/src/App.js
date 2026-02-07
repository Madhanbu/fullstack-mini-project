import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://fullstack-mini-project-10.onrender.com/api/facts/")

      .then(res => res.json())
      .then(data => setFacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Fun Facts</h1>
      <ul className="facts-list">
        {facts.map(f => (
          <li key={f.id} className="fact-item">{f.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
