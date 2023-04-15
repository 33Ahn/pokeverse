import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card"

//  we destructured the url and name variables directly from the props object, using object destructuring syntax in the function parameter definition. This allows us to use the url and name variables directly in the component.
// Iterate over the pokemonList array and for each pokemon render a single PokemonCard passing the name and url to the card
function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null)

  // We then used the fetch method to fetch the pokemonData from the API using the url variable directly. We then used the json method to parse the response and set the pokemon state with the data.
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data) // Log the data returned from the fetch, This URL will return all the data about a specific Pokemon.
        setPokemon(data)})
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

export { PokemonCard }

// In line 28 & 35, the "?" after pokemon is the optional chaining operator in JavaScript. It is used to prevent potential errors that may occur when trying to access nested properties or methods on an object that may be null or undefined.
// If "pokemon" is null or undefined, the expression "{pokemon?.sprites.front_default}" will evaluate to "undefined" instead of causing an error. This can help prevent crashes or unexpected behavior in your application when dealing with potentially undefined or null values.