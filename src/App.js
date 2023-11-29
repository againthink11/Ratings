
import { useState } from 'react';
import './App.css';
import Ratings from './components/Ratings/Ratings';

function App() {
  const [rates, setRates] = useState(0)
  return (
    <div>
      <Ratings maxRating={10} color='orange' size={24} setRates={setRates}/>
      {/* <Ratings maxRating={5} color='orange' size={24} message={['Terrible', 'Bad', 'Okey', 'Good', 'Amazing']} setRates={setRates}/> */}
      <p>This Movie is rated {rates} stars.</p>
    </div>
  );
}

export default App;
