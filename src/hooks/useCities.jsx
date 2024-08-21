import { createContext, useContext } from "react";

const CitiesContext = createContext();

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { CitiesContext };
