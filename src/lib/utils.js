export const handleHashChange = (setCurrentHash) => {
  return () => {
    setCurrentHash(window.location.hash || "#home");
  };
};
