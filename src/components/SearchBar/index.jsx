import { useState } from 'react'
import './styles.css'

export default function SearchBar(props) {


    const [input, setInput] = useState('')

    function formSubmit(e) {
        e.preventDefault()
        console.log('form submit: ' + input)
        props.onSubmit(input)
    }

    return (
        <form onSubmit={(e) => formSubmit(e)} className="search-bar">
            <input type="text" placeholder="Digite sua pesquisa"
                value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Pesquisar</button>
        </form>
    )
}