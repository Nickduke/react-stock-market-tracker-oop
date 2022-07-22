import './App.css';
import StockRow from './components/StockRow.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div>
          <div className='card'>
            <div className='card-body'>
              <ul className='list-group'>
                <StockRow ticker='appl' />
                <StockRow ticker='goog' />
                <StockRow ticker='msft' />
                <StockRow ticker='tsla' />
              </ul>
            </div>
          </div>
        </div>
        {/* <table className='table'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker='aapl' />
            <StockRow ticker='goog' />
            <StockRow ticker='msft' />
            <StockRow ticker='tsla' />
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default App;
