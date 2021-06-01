import { useState } from "react"
import './styles.css'

const SearchBar = ({ setPesquisa, setPage }) => {
    const [input, setInput] = useState('')

    const buscarImagens = (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Pesquisa vazia')
            return
        }
        setPesquisa(input)
        setPage(1)
    }

    return (
        <div className="container">
            <form onSubmit={buscarImagens} className="search-bar">
                <input type="text" placeholder="Digite sua pesquisa"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit"><img src="/search.svg" alt="search" /></button>
            </form>
        </div>
    )
}

export default SearchBar
