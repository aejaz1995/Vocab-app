import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { WordList } from './Components/WordList';
import { AddWord } from './Components/AddWord';

function App() {
  return (
    <div className="App">
      <Header />
      <WordList />
      {/* <AddWord /> */}
    </div>
  );
}

export default App;
