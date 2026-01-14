import "./App.css";
import AllBooks from "./components/Books";
import BooksByAuthor from "./components/BooksByAuthor";
import BookByTitle from "./components/BooksByTitle";

function App() {
  return (
    <>
      <AllBooks />
      <BookByTitle title="Shoe Dog" />
      <BooksByAuthor author="J.K. Rowling" />
    </>
  );
}

export default App;
