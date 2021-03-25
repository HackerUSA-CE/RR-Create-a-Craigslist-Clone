// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div>
      <h1>nickslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
