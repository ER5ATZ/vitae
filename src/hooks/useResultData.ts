import { useState, useEffect } from 'react';
import { Profile } from '../types';

const useResultData = () => {
  const [resultData, setResultData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/results.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: Profile = await response.json();
        setResultData(data);
      } catch (error) {
        setError((error as Error).message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { resultData, loading, error: error as string | null };
};

export default useResultData;