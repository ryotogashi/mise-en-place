const getRandomName = async () => {
  const res = await fetch("https://uinames.com/api/?amount=25");
  const data: any[] = await res.json();
  return data.map(item => item.name);
};

export default getRandomName;
