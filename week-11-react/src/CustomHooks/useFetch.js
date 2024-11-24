import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    setLoading(true);
    try{
        const response = await fetch(url);
    const data = response.json();
    setData(data);
    setLoading(false);
    }catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);


  return {data,loading}
}
