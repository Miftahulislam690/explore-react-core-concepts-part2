import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './Friends';

function handleClick(){
  alert('Button is clicked');
}

const handleClick2 = () => {
  alert('Button2 is clicked');
}

const fourthButton = (num) => {
  alert(num * 4);
}

function App() {
  return (
    <>
      <h2>Explore core concepts of React part2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => {alert('Third button is clicked')}}>Third Click</button>
      <button onClick={() => fourthButton(4)}>Fourth Click</button>
    </>
  )
}

export default App
