import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <PageNav />
      <h1 className="test">World-wise</h1>
      <Link to="./app">Go to App</Link>
    </div>
  );
}

export default Homepage;
