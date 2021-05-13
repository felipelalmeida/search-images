import { useState } from 'react'
import SearchBar from './components/SearchBar'
import api, { key } from './services/api'

function App() {

  const [images, setImages] = useState([])


  async function searchSubmit(input) {
    const response = await api.get(`?key=${key}&q=${input}&lang=pt`)
    console.log(response.data)
    setImages(response.data.hits)
  }


  return (
    <div>
      <SearchBar onSubmit={searchSubmit} />
      <section className="cards">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <a href={image.largeImageURL} target="blank">
                <div className="zoom-image">
                  <img src={image.webformatURL} alt={image.tags} className="image" />
                </div>
                <span className="info-image">{`${image.imageHeight} X ${image.imageWidth}`}</span>
              </a>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
