import { useState, useEffect } from "react";
import axios from 'axios';


function useAxios(keyI, base_url) {
    const [res, setRes] = useLocalStorage(keyI);

    const addResData = async (formatter = data => data, restOfUrl = "") => {
       try{
        const response = await axios.get(`${base_url}${restOfUrl}`);
        
        console.log("API Response:", response.data); // Debugging line
        
          setRes(data => [...data, formatter(response.data)]);
       } catch(e) {
        console.error("Axios request failed:", e);
       }
    };

    const clearRes = () => setRes([]);

    return [res,addResData,clearRes];
};
function useLocalStorage(key, initialValue = []) {
  const [value, setValue] = useState(() => {
      try {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
      } catch (error) {
          console.error("Error reading localStorage key", key, ":", error);
          return initialValue;
      }
  });

  useEffect(() => {
      try {
          localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
          console.error("Error saving to localStorage key", key, ":", error);
      }
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
export {useAxios, useLocalStorage};