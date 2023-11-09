import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${params.name}&apikey=55a92eda16ca38149deda9e6b2a01e3d&hash=29a8a5a71fa0c4870a0341b5875c53e0`
    );
    const result = await data.json();
    setData(result.data.results);
  };

  useEffect(() => {
    fetchData();
  }, [params.name]);

  return (
    <section className="all-character">
      <div className="container">
        {data.length !== 0 ? (
          data.map((character) => {
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
          })
        ) : (
          <h1 className="no-data">
            Ther Is No Data About What You Are Looking For
          </h1>
        )}
      </div>
    </section>
  );
}

export default Searched;
