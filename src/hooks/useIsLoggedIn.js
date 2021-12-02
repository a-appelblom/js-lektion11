import { useContext } from "react";
import { LoggedInContext } from "../App";

const useIsLoggedIn = () => {
  const loggedIn = useContext(LoggedInContext);
  return loggedIn;
};
export default useIsLoggedIn;
