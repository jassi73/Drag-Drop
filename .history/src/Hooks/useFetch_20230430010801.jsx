import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    //     const source = axios.CancelToken.source();

    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        console.log(res);
        res && setData(res);
        //    res && setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
    return () => {};
  }, [url]);

  return { data, loading, error };
}
