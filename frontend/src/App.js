import './App.css';
import React from "react"
import { Header } from './Components/Header';
import { WordList } from './Components/WordList';
// import { AddWord } from './Components/AddWord';

function App() {

  const [searchWord, setSearchWord ] = React.useState("")
  
  return (
    <div className="App">
      <Header searchWord={searchWord} setSearchWord={setSearchWord} />
      <WordList searchWord={searchWord}/>
      
    </div>
  );
}

export default App;
