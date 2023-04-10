import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className="App">
      <UseEffectCounterContainer />
    </div>
  );
}

export default App;
