import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (query) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(query).then((gifs) => {
      setstate({
        data: gifs,
        loading: false,
      });
    });
  }, [query]);

  return state;
};

export { useFetchGifs };
