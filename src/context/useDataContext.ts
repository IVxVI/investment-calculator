import { useContext } from "react";
import { DataContext } from "./dataContext";

export function useDataContext() {
  return useContext(DataContext);
}