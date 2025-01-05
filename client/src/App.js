import './App.css';
import Home from './components/Home';
import GameScreen from './components/GameScreen';
const cardImages = [
  { src: '/asset/animal/cow.jpg',matched:false},
  { src: '/asset/animal/dog.jpg',matched:false },
  { src: '/asset/animal/lion.jpg',matched:false },
  { src: '/asset/animal/fox.jpg',matched:false },
  { src: '/asset/animal/cat.jpg',matched:false },
  { src: '/asset/animal/tiger.jpg',matched:false },
  { src: '/asset/animal/fish.jpg',matched:false },
  { src: '/asset/animal/bird.jpg',matched:false },

];
function App() {
  
  return (
    <div className='App'>

      <Home />
      <GameScreen cardImages={cardImages}/>
    </div>
  );
}

export default App;
