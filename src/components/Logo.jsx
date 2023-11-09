import { Link } from "react-router-dom";

function Logo() {
  return (
    <section className="logo">
      <div className="container">
        <Link to={"/marvel-app/"}>MARVEL</Link>
      </div>
    </section>
  );
}

export default Logo;
