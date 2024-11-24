export const useFetch = (url, interval) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData(); // Initial fetch
  
      if (interval !== null) {
        const fetchInterval = setInterval(() => {
          fetchData();
        }, interval);
  
        return () => clearInterval(fetchInterval); // Clear interval on cleanup
      }
    }, [url, interval]);
  
    return { data, loading, error };
  };