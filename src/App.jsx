import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import './App.css'; // ✅ Correct


function App(){
  return (
    <div className="App">
      <h1>Hello From App Component</h1>
      {/* <accordion/> */}
      <Accordian />

      {/* <RandomColor/> */}
      <RandomColor />

      {/* <star-rating/> */}
      <StarRating />

    </div>
  );
}

export default App;