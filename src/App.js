import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import api, { key } from './services/api'

function App() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [pesquisa, setPesquisa] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const consultaAPI = async () => {
      if (pesquisa === '') return

      const response = await api.get(`?key=${key}&q=${pesquisa}
      &lang=pt&per_page=20&page=${page}`)

      setImages(response.data.hits)
      console.log(response.data)
      setTotalPages(Math.ceil(response.data.totalHits / 20))
    }
    consultaAPI()

    window.location.href = '#ancora'

  }, [pesquisa, page])

  function previousPage() {
    if (page === 1) return
    setPage(page - 1)
  }

  function nextPage() {
    if (page >= totalPages) return
    setPage(page + 1)
  }


  return (
    <div href="#" id="ancora">
      <SearchBar setPesquisa={setPesquisa} setPage={setPage} />
      <section className="cards" >
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
      </section>
      { (totalPages !== 0) &&
        <div className="pagination">
          <button onClick={previousPage} disabled={page === 1}><img src="/arrow-left.svg" alt="previous" /></button>
          <p> {page} ... {totalPages} </p>
          <button onClick={nextPage} disabled={page === totalPages}><img src="/arrow-right.svg" alt="next" /></button>
        </div>

      }
    </div >
  );
}

export default App;
