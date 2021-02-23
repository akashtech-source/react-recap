import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Jasim', 'Dipjol', 'Bappa Raz'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[0]} age="56"></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name="Bappa Raz"></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>Movies I have acted : {props.movies}  </h4>
}
function Nayok(props){
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
    
    
  }
  return (
    <div style={nayokStyle}>
      <h1>{props.name}</h1>
      <h3>{props.age || 30}</h3>
    </div>
  )
}

export default App;
