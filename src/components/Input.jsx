import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  function searched(e) {
    e.preventDefault();
    navigate("/marvel-app/searched/" + search);
    if (search === "" || search === undefined) {
      return navigate("/marvel-app/");
    }
  }

  return (
    <section className="input">
      <div className="container">
        <form onSubmit={searched}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
          />
          <button onSubmit={searched} type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Input;
