import './App.css';
import { useState } from 'react';
import DogList from './components/DogList';
import NumDogsSelector from './components/NumDogsSelector'
import { useError } from './hooks';

function App() {
  const [numDogs, setNumDogs] = useState(5);
  const error = useError();

  const updateNumberOfDogs = (number) => {
    setNumDogs(number);
  }

  return (
      <main>
        {error ? <div className="error">{error.message}</div> : null}
        <h1>Pick your favorite dogs!</h1>
        <NumDogsSelector onChange={updateNumberOfDogs}/>
        <DogList numDogs={numDogs}></DogList>
      </main>
  );
}

export default App;
