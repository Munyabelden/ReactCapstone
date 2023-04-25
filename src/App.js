import Countries from './components/Countries';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';

const  App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/details/:countryName' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
