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
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
export default useLocalStorage;
export {useAxios, useLocalStorage};