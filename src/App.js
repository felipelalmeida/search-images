import { useState } from 'react'
import SearchBar from './components/SearchBar'
import api, { key } from './services/api'

function App() {

  const [images, setImages] = useState([])


  async function searchSubmit(input) {
    const response = await api.get(`?key=${key}&q=${input}&lang=pt`)
    // console.log(response.data)
    setImages(response.data.hits)
  }

  function Card() {
    return (
      <div>
        <section className="cards">
          {images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.webformatURL} alt={image.tags} className="image"/>
              </div>
            )
          })}
        </section>
      </div>
    )
  }

  return (
    <div>
      <SearchBar onSubmit={searchSubmit} />
      <Card />
    </div>
  );
}

export default App;
