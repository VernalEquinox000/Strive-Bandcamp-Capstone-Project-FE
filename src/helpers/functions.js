export const isLoggedIn = () => {
  const isLoggedIn = localStorage.getItem("LoggedIn");

  return isLoggedIn;
};
