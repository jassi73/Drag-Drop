import { useEffect, useState } from "react";

export default function useFetch(page) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    //     const source = axios.CancelToken.source();

    fetch(
      `https://stageapibc.monkcommerce.app/admin/shop/product?search=Example Hat 218&page=${page}`
    )
      .then((data) => data.json())
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        console.log(res);
        res && setData(res);
        //    res && setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..", err);
      });
    return () => {};
  }, [page]);

  return { data, loading, error };
}
