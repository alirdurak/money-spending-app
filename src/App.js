import './App.css';
import Money from './components/Money';
import List from './components/List';
import Receipt from './components/Receipt';
function App() {
  return (
    <div className="App p-10">
      <h1 className='text-[70px]'>Spend Your Money</h1>
      <Money></Money>
      <List></List>
      <Receipt></Receipt>
    </div>
  );
}

export default App;
