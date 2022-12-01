import React from "react"

function Search({setSearch, search}) {

    function handleSearch(e){
        setSearch(e.target.value)
    }
    
    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} placeholder="Search..."/>
        </div>
    );
}

export default Search;