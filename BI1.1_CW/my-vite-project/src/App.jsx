import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./components/Movies";
import MoviesByTitle from "./components/MoviesByTitle";

function App() {
  return (
    <main>
      <Movies />
      <MoviesByTitle title="Gully Boy" />
    </main>
  );
}

export default App;
