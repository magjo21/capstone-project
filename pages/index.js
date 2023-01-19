import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>EasyRev</h1>
      <Link to="/detailed">
        <button type="button">Good</button>
      </Link>
      <Link to="/detailed">
        <button type="button">Middle</button>
      </Link>
      <Link to="/detailed">
        <button type="button">Bad</button>
      </Link>
    </>
  );
}
