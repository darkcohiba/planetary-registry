import React from "react"
import Planet from "./Planet"

function PlanetList({ planets }) {
    const planetList = planets.map((planet) => {
        return <Planet key={planet.id} planet={planet} />
    })
    // console.log(planetList)

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetList}
            </tbody>
        </table>
    );
}

export default PlanetList;