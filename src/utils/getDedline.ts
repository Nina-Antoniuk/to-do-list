export const getDedline = () => {
  const date = new Date();
  return date.toISOString().slice(0, 10);
};
