// // import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
// import Counter from './components/Counter';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <Counter count={count} setCount={setCount} />
//   );
// }

// export default App;

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './content/CounterContext';

function App() {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
    </CounterContext.Provider>
  );
}

export default App;
