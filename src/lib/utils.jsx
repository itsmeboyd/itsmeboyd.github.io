const handleHashChange = (setCurrentHash) => {
  return () => {
    setCurrentHash(window.location.hash || "#home");
  };
};

export default handleHashChange;
