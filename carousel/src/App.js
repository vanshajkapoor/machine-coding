import './App.css';
import Carousel from './components/Carousel';
import { data } from './data/data';

function App() {
  return (
    <div className="App">
      <Carousel items={data} />
    </div>
  );
}

export default App;
