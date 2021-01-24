import logo from './logo.svg';
import './App.css';

import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
      <Hello age="20" name="Reza"> </Hello>
      <Hello age="21" name="sakib"> </Hello>
      <Hello age="20" name="rokon"> </Hello>




      <Welcome> </Welcome>


    </div>
  );
}

export default App;

