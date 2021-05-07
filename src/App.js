import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import api, {key} from './services/api'

function App() {


  return (
    <div>
      <SearchBar/>
    </div>
  );
}

export default App;
