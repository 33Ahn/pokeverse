import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//  to allow user to enter pokemon name
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import Row from "react-bootstrap/Row";
import { PokemonCard } from "../components";

// Home component will handle the searching and filtering of the filteredPokemon array
function Home({ pokemonList }) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemonList]);

  return (
    <>
      {/* Center things and render the whole page in a Container and many Row / Col */}
      <Container>
        <Row className="mb-4">
          <Col sm="8" md="6" className="mx-auto">
            <InputGroup>
              <InputGroup.Text id="search">Search</InputGroup.Text>
              <FormControl
                value={search}
                aria-label="search"
                aria-describedby="search"
                placeholder="Search Pokemon"
                // connect an onChange that will filter the list of pokemon
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="g-4">
          {filteredPokemon.map((pokemon) => (
            <Col key={pokemon.name}>
              <PokemonCard name={pokemon.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export { Home };
