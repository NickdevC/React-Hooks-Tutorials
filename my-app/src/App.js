import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';

function App() {
  return (
    <div className="App">
      <UseEffectCounter />
    </div>
  );
}

export default App;
