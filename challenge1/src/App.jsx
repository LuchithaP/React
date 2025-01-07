import { useState } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='page'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;