import logo from './logo.svg';
import './App.css';
import Navibar from './component/navibar';
import Proposal from './component/Proposal';
import Funding from './component/Funding';

function App() {
  return (
    <div className="App">
      <Navibar />
      <div className='proposal-container'>
        <Proposal />
        <Proposal type="add" />
      </div>
    </div>
  );
}

export default App;
