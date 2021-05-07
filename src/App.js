import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import api, { key } from './services/api'

function App() {

  async function searchSubmit(input) {
    const response = await api.get(`?key=${key}&q=${input}`)
    console.log(response.data)
  }


  return (
    <div>
      <SearchBar onSubmit={searchSubmit} />
    </div>
  );
}

export default App;
