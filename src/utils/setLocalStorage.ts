export const setLocalStorage = () => {
  const item = localStorage.getItem("gifs");
  return item !== null ? JSON.parse(item) : [];
};
