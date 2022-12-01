import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({setPlanets, planets}) {
    const [name, setName] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")
    const [population, setPopulation] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }

    function handleClimate(e) {
        setClimate(e.target.value)
    }

    function handleTerrain(e) {
        setTerrain(e.target.value)
    }

    function handlePopulation(e) {
        setPopulation(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newPlanet = {
            id: uuid(),
            name,
            climate,
            terrain,
            population
        }
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify(newPlanet)
        })
        .then((r) => r.json())
        .then((newPlanet) => {
            // TODO: PASS A CALLBACK FUNCTION TO ADD THE NEW PLANET TO THE PLANET LIST
            setPlanets([...planets, newPlanet])
        })
    }





    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleName}/>
            <input type="text" name="climate" placeholder="Climate" value={climate} onChange={handleClimate} />
            <input type="text" name="terrain" placeholder="Terrain" value={terrain} onChange={handleTerrain}/>
            <input type="text" name="population" placeholder="Population" value={population} onChange={handlePopulation}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;