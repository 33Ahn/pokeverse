import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card"
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import {pokeApi} from "../App"



//  we destructured the url and name variables directly from the props object, using object destructuring syntax in the function parameter definition. This allows us to use the url and name variables directly in the component.

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    // We then used the fetch method to fetch the pokemonData from the API using the url variable directly. We then used the json method to parse the response and set the pokemon state with the data.
    fetch(url)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch((error) => {
        console.log(error)
      })
  }, [url])

  return (
      <Card style={{width: "18rem"}} className="mx-auto">
        <Card.Img
          width="286"
          height="286"
          bg="dark"
          variant="top"
          src={pokemon?.sprites.front_default}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text as="div">
            Abilities:
            <ul>
              {pokemon?.abilities.map((ability) => (
                <li key={ability.ability.name}>
                  <span key={ability.ability.name}>{ability.ability.name}</span>
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
//     <div>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button onChange={handleChange} variant="outline-success">Search</Button>
//         </Form>

//         {pokemonData.results && pokemonData.results.map((pokemon) => {
//           <Card key={pokemon.name} classname="my-3">
//             <Card.Body>
//               <Card.Title>
//                 {pokemon.name}
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         })}
//     </div>
//   );
// }}

export { PokemonCard }
