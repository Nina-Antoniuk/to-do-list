export const getInitialDedline = () => {
  const date = new Date();
  return date.toISOString().slice(0, 10);
};
