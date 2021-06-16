import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { WordList } from './Components/WordList';

function App() {
  return (
    <div className="App">
      <Header />
      <WordList />
    </div>
  );
}

export default App;
