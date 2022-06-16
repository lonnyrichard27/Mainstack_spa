import Sidebar from './components/Sidebar'
import "./App.css";
import Main from './components/Main';
import MainRight from './components/MainRight';

const App = () => {
  return (
    <div className='flex'>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Main />
      <div className="hidden md:block">
        <MainRight />
      </div>
    </div>
  )
}

export default App