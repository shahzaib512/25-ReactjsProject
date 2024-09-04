import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
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

      {/* <image-slider/> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* <load-more-data/> */}
      <LoadMoreData />

    </div>
  );
}

export default App;