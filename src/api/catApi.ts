export const getCatFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  } catch (error: any) {
    console.error('Error fetching cat fact:', error);
    return '';
  }
};
