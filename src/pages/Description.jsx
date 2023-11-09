import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Description() {
  const [charcter, setCharcter] = useState([]);
  const params = useParams();

  const fetchCharcter = async () => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${params.id}?ts=1&apikey=55a92eda16ca38149deda9e6b2a01e3d&hash=29a8a5a71fa0c4870a0341b5875c53e0`
    );
    const result = await data.json();
    setCharcter(result.data.results);
  };

  useEffect(() => {
    fetchCharcter();
  }, [params.id]);

  return (
    <section className="description">
      <div className="container">
        {charcter.map((charcter) => {
          return (
            <div className="box" key={charcter.id}>
              <div className="title-img">
                <h1>{charcter.name}</h1>
                <img
                  src={
                    charcter.thumbnail.path + "." + charcter.thumbnail.extension
                  }
                  alt=""
                />
              </div>
              <div className="text">
                <h1>Description</h1>
                {charcter.description !== "" ? (
                  <h3>{charcter.description}</h3>
                ) : (
                  <h3>there is no specific description for this charcter</h3>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Description;
