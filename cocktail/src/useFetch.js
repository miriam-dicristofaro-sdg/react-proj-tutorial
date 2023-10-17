import { useState, useEffect } from "react";
import axios from "axios";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
  const url = type ? singleUrl : searchUrl;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0); //# di oggetti nel nostro array data
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async (query) => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}${query}`);
        setData(response.data);
        setCount(response.data.drinks.length);
        console.log(response.data.drinks[0]);
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(query);
  }, [url, query]);
  return { isLoading, data, isError, count };
};

export default useFetch;
