import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { URL } from '../utils/consts';

export type dataType = {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: [];
};

type TableContextProps = {
  isPending: boolean;
  data: dataType[] | null;

  activePage: number;
  setActivePage: (value: number) => void;

  isOpenItem: dataType | null;
  setIsOpenItem: (value: dataType | null) => void;

  addNewRow: (newRow: dataType) => void;
  setCount: (value: number) => void;
  deleteRow: (rowId: number) => void;
  updateRow: (row: dataType) => void;
} | null;

const TableContext = createContext<TableContextProps>(null);

function TableContextProvider({ children }: { children: ReactNode }) {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isOpenItem, setIsOpenItem] = useState(null);

  const id = 133930;

  useEffect(() => {
    setIsPending(true);
    fetch(`${URL}/v1/outlay-rows/entity/${id}/row/list`, { referrerPolicy: 'unsafe-url' })
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .then(() => setIsPending(false));
  }, [count]);

  function addNewRow(newRow: dataType) {
    console.log(newRow);
    fetch(`${URL}/v1/outlay-rows/entity/${id}/row/create`, {
      referrerPolicy: 'unsafe-url',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRow),
    }).then(() => setCount(s => s + 1));
  }

  function deleteRow(rowId: number) {
    console.log(rowId);
    fetch(`${URL}/v1/outlay-rows/entity/${id}/row/${rowId}/delete`, {
      referrerPolicy: 'unsafe-url',
      method: 'DELETE',
    }).then(() => setCount(s => s + 1));
  }

  function updateRow(row: dataType) {
    console.log(row);
    fetch(`${URL}/v1/outlay-rows/entity/${id}/row/${row.id}/update`, {
      referrerPolicy: 'unsafe-url',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    }).then(() => setCount(s => s + 1));
  }

  return (
    <TableContext.Provider
      value={{
        isPending,
        data,
        activePage,
        isOpenItem,
        // @ts-expect-error dispatch err
        setIsOpenItem,
        setActivePage,
        addNewRow,
        setCount,
        deleteRow,
        updateRow,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

function useTableContext() {
  const context = useContext(TableContext);
  if (!context) throw new Error('TableContext was used outside of TableContextProvider');
  return context;
}

export { TableContextProvider, useTableContext };
