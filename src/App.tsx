import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SideBar from './components/SideBar';
import { TableContextProvider } from './contexts/TableContext';

export default function App() {
  return (
    <TableContextProvider>
      <ReactQueryDevtools />
      <div className='layout'>
        <Header />

        <SideBar />

        <MainSection />
      </div>
    </TableContextProvider>
  );
}
