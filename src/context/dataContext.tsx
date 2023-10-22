import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Data } from "../types/Data";

type DataContextType = {
  data: Data[],
  setData: Dispatch<SetStateAction<Data[]>>,
}

const defaultDataContext: DataContextType = {
  data: [{
    year: '', 
    totalSaving: '', 
    interest: '', 
    totalInterest: '',
    investedCapital: ''
  }],
  setData: () => {}
};

export const DataContext = createContext(defaultDataContext);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState([{
    year: '', 
    totalSaving: '', 
    interest: '', 
    totalInterest: '',
    investedCapital: ''
  }]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
