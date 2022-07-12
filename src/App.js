import Advanced from "./components/Advanced/Advanced";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shortener from "./components/Shortener/Shortener";
import ShowCase from "./components/ShowCase/ShowCase";

function App() {
  return (
    <div className="App">
      <Header />
      <ShowCase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
