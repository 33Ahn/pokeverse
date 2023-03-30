import React, {useState, useEffect} from 'react';
import {Card } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {pokeApi} from "../App"

//  we destructured the url and name variables directly from the props object, using object destructuring syntax in the function parameter definition. This allows us to use the url and name variables directly in the component.
function PokemonCard({ url, name }) {

  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    // We then used the fetch method to fetch the pokemonData from the API using the url variable directly. We then used the json method to parse the response and set the pokemonData state with the data.
    fetch(pokeApi)
      .then(response => response.json())
      .then(data => setPokemonData(data))
  }, [url])


  function handleChange(e) {
    // grab input value
    const value = e.target.value;
    // regex to match input value, global, case-insensitive
    // In the handleChange function, we use the regular expression to create a pattern that matches the value input by the user, and then we use that pattern to filter the pokemonData array for any Pokemon whose name matches the pattern.
    const regex = new RegExp(value, 'gi');
    // filter matches from pokemonData
    const filtered = pokemonData.filter((pokemon) => {
      return pokemon.name.match(regex) || pokemon.state.match(regex);
  })
  console.log(filtered)

  return (
    <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button onChange={handleChange} variant="outline-success">Search</Button>
        </Form>

        {pokemonData.results && pokemonData.results.map((pokemon) => {
          <Card key={pokemon.name} classname="my-3">
            <Card.Body>
              <Card.Title>
                {pokemon.name}
              </Card.Title>
            </Card.Body>
          </Card>
        })}
    </div>
  );
}}

export { PokemonCard }
