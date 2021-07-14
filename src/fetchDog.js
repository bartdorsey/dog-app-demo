// Fetches random dog URLs, don;t worry how this works for now.
// We will learn this later...

async function fetchDogs(num) {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`);
  if (!response.ok) {
    console.warn(response);
    throw new Error("Couldn't connect to server");
  }
  const { message: dogs } = await response.json();
  return dogs;
};

export default fetchDogs;
