import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarketApp from "./components/MarketApp";
//
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section id="market">
          <div>
            <MarketApp />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
