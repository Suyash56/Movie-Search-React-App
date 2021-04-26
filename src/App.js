import "./styles.css";
import "./css/global.css";
import Layout from "./components/Layout";
import Searchpages from "./components/Searchpage";

export default function App() {
  return (
    <div>
      <Layout />
      <Searchpages />
    </div>
  );
}
