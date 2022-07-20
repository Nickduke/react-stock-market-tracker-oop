import './App.css';

import StockRow from './components/StockRow';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker='appl' />
            <StockRow ticker='goog' />
            <StockRow ticker='msft' />
            <StockRow ticker='tsla' />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
