import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AllCharacter() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=55a92eda16ca38149deda9e6b2a01e3d&hash=29a8a5a71fa0c4870a0341b5875c53e0`
    );
    const result = await data.json();
    setData(result.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="all-character">
      <div className="container">
        {data.map((character) => {
          return (
            <div key={character.id} className="box">
              <Link to={"/marvel-app/Description/" + character.id}>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt=""
                />
                <h3>{character.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AllCharacter;
