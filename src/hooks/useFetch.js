// hooks.js
import { csv } from "d3-fetch";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUrl() {
      const response = await csv(url);
      setData(response);
      setLoading(false);
    }
    fetchUrl();
  }, [url]);
  return [data, loading];
};

export { useFetch };