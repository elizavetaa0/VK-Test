export const predictAge = async (name: string) => {
  try {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();
    return `Predicted age for ${name}: ${data.age}`;
  } catch (error: any) {
    console.error('Error fetching age prediction:', error);
    return '';
  }
};
