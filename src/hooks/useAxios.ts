import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    /^get$/i.test(axiosParams.method as string),
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => fetchData(axiosParams).then(r => r);

  useEffect(() => {
    if (/^get$/i.test(axiosParams.method as string)) {
      void fetchData(axiosParams).then(r => r);
    }
  }, [axiosParams.method, axiosParams.url, axiosParams.data]);

  return { response, error, loading, sendData };
};

export default useAxios;
