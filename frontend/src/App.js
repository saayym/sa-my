import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./views/Landing";

function App() {
  return (
    <div className="App">
      <header className="Header">
          <Navbar fixed />
      </header>

      <main className="Main">
        <Landing />
      </main>

      <footer className="Footer">
          <Footer />
      </footer>
    </div>
  );
}

export default App;