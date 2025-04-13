import PageExchangeRates from './components/PageExchangeRates';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Converter from './components/Converter';

const App = () => {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Конвертер валют</Link>
            </li>
            <li>
              <Link to='/exachange-rates'>Курсы валют</Link>
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path='/' Component={Converter}/>
            <Route path='/exachange-rates' Component={PageExchangeRates}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;