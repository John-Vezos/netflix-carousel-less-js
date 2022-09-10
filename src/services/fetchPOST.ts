const fetchPOST = async (
  url: string,
  payload: any,
  signal: AbortSignal,
): Promise<any> => {
  const response = await fetch(url, {
    signal,
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch(error => {
    console.error('Error:', error);
  });

  if (response === undefined) return -200;
  if (!response.ok) return -500;
  const data = (await response.json()) as Promise<any>;
  console.log(data);
  return data;
};

export default fetchPOST;
