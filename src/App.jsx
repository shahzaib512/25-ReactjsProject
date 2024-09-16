import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import './App.css'; // ✅ Correct
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-model-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-auto-complete-with-api';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import TicTacToe from './components/tic-tact-toe';
import Weather from './components/weather-data/weather';
import Pagination from './components/pagination';
import PaginationTest from './components/pagination/test';


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

      {/* Tree View component/ menu UI component/recursive navigation */}
      <TreeView menus={menus} />

      {/* Qr code generator Component*/}
      <QRCodeGenerator />

      {/* Dark Mode Component */}
      <LightDarkMode />

      {/* Scroll indicator components */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=3"} />

      {/* Random Tabs Component */}
      <TabTest />

      {/* Custom Model Popup */}
      <ModalTest />

      {/* Github profile finder */}
      <GithubProfileFinder />

      {/* Auto search and complete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic tak toe */}
      <TicTacToe />

      {/* feature flag component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Weather app */}
      <Weather />

      <PaginationTest />

    </div>
  );
}

export default App;