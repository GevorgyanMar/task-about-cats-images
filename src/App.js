import './App.css';
import Main from './components/sections/Main';
import Sidebar from './components/sections/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
