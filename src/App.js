import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import api, { key } from './services/api'

function App() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)


  async function searchSubmit(input) {
    const response = await api.get(`?key=${key}&q=${input}
    &lang=pt&per_page=20&page=${page}`)
    console.log(response.data)
    setImages(response.data.hits)
  }


  function previousPage() {
    if (page === 1) {
      return
    }
    setPage(page - 1)
  }

  function nextPage() {
    setPage(page + 1)
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
                <span className="info-image">{image.tags}</span>
              </a>
            </div>
          )
        })}
        <button onClick={previousPage}>Anterior</button>
        <button onClick={nextPage}>Próxima</button>
      </section>
    </div>
  );
}

export default App;
