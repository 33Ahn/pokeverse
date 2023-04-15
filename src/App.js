import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home, PokemonDetails, Layout } from "./routes";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  // Get the Pokemon
  // fetch using the provided pokeApi url and set the returned data on state
  // note the API returns a data.results array of objects, each one containing just an ID, a Name, and a URL. That returned URL will be used to fetch the rest of the data about the Pokemon.
  useEffect(() => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data returned from the fetch
        setPokemonList(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {path: "/", element: <Home />},
        {path: "/:name", element: <PokemonDetails />}
      ]
    }
  ])

  return (
      <div>
        <RouterProvider router={router} />
      </div>
    

    // <BrowserRouter>
    //   <div data-testid="app">
    //     <Navigation />

    //     <Routes>
    //       <Route path="/" element={<Home pokemonList={pokemonList} />} />
    //       <Route path="/:name" element={<PokemonDetails />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export { App };
