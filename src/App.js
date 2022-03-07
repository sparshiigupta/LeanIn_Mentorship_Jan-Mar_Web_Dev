import axios from "axios";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p));
    });
    // console.log(pokemon);
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";
  return (
    <>
      {loading && <h3>loading.....</h3>}
      {!loading && (
        <div className="pokemons">
          <h1 className="title">POKEVERSE🎃</h1>
          <div className="container">
            {pokemon.map((p) => (
              <Card id={p.name} name={p.name} url={p.url} />
            ))}
          </div>
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      )}
    </>
  );
}

export default App;
