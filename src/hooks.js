import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from './store/dogsSlice';
import { selectDog, unselectDog } from './store/selectedDogsSlice';

export function useError() {
  const error = useSelector(state => state.dogs.error);
  return error;
}

export function useDogs(numDogs) {
  const dogs = useSelector(state => state.dogs.all);
  const dispatch = useDispatch();

  useEffect(() => { // Replaces ComponentDidMount & ComponentWillUpdate
    dispatch(getDogs(numDogs));
  }, [numDogs, dispatch]); // Need dispatch in here mainly to shut up the linter

  return dogs;
}

export function useSelectedDogs() {
  const selectedDogs = useSelector(state => state.selectedDogs);
  const dispatch = useDispatch();

  function toggleDog(dog) {
    if (selectedDogs.includes(dog)) {
      dispatch(unselectDog(dog));
    } else {
      dispatch(selectDog(dog));
    }
  }

  return [selectedDogs, toggleDog];
}