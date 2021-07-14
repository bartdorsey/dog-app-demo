import Dog from './Dog';
import { useDogs, useSelectedDogs } from '../hooks';

export default function DogList({numDogs}) { // Pure function
  const dogs = useDogs(numDogs);
  const [selectedDogs, toggleDog] = useSelectedDogs();

  const dogComponents = dogs.map(dog => (
    <Dog
      selected={selectedDogs.includes(dog)}
      key={dog}
      dog={dog}
      toggleDog={toggleDog} />
  ));

  return (
    <div id="dog-list">
      {dogComponents}
    </div>
  )
}