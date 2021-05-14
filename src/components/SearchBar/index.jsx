// import { useState } from 'react'
// import './styles.css'

//  const SearchBar = ({ setSearch }) => {


//     const [input, setInput] = useState('')

//     const formSubmit = (e) => {
//         e.preventDefault()
//         console.log('form submit: ' + input)
//         setSearch(input)
//     }

//     return (
//         <div className="container">
//             <form onSubmit={formSubmit} className="search-bar">
//                 <input type="text" placeholder="Digite sua pesquisa"
//                     value={input} onChange={(e) => setInput(e.target.value)} />
//                 <button type="submit">Pesquisar</button>
//             </form>
//         </div>
//     )
// }

// export default SearchBar




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
        <div className="container">
            <form onSubmit={(e) => formSubmit(e)} className="search-bar">
                <input type="text" placeholder="Digite sua pesquisa"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    )
}