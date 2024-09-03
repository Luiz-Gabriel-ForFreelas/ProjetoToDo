import React from "react";

const Search = ({search, setSearch}) => {
    return ( <div className="search">
        <h2>Pesquisar</h2>

        {/* Sempre que um valor é digitado no input a função setSearch é chamada e redefine a variavel search */}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..." />
    </div>
    )
}

export default Search;