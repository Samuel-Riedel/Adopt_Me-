import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedlist] = useState([]);
  const [status, setStatus] = useState("Unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedlist([]);
    } else if (localCache[animal]) {
      setBreedlist(localCache[animal]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedlist([]);
      setStatus("Loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedlist(localCache[animal]);
      setStatus("Loaded");
    }
  }, [animal]);

  return [breedList, status];
}
