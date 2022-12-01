import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")

    useEffect (() => {
        fetch("http://localhost:8085/planets")
        .then((r) => r.json())
        .then(data => setPlanets(data))
    }, [])

    const resultingPlanetsToDisplay = planets.filter(planet => {
        return(
        planet.name.toLowerCase().includes(search.toLowerCase())
        || planet.climate.toLowerCase().includes(search.toLowerCase())
        || planet.terrain.toLowerCase().includes(search.toLowerCase())
        || planet.population.toLowerCase().includes(search.toLowerCase())
    )
    })

    return(
        <div className="registry">
            <Search search={search} setSearch={setSearch}/>
            <div className="content">
                <PlanetList planets={resultingPlanetsToDisplay}/>
                <NewPlanetForm planets={planets} setPlanets={setPlanets}/>
            </div>
        </div>
    )
}

export default Registry;