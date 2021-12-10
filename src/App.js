import logo from './logo.svg';
import './App.css';
import { GraveTool } from './components/graveTool';
import { Butterfy } from './components/butterfly';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Butterfy />
        <GraveTool />
      </header>
    </div>
  );
}

export default App;
