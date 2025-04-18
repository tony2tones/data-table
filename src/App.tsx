import './App.css';
import DataTable from './components/DataTable';
import { data, columnData } from './data/mockData';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <DataTable data={data} columns={columnData} />
    </div>
  );
}

export default App;
