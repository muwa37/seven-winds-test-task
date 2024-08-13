import Header from './components/Header';
import MainSection from './components/MainSection';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <div className='layout'>
      <Header />

      <SideBar />

      <MainSection />
    </div>
  );
}
