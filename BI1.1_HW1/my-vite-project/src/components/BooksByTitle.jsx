import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/title/${title}`
  );
  //   console.log(data);
  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Release Year: {data.publishedYear}</p>
      <p>Genre: {data.genre.join(", ")}</p>
    </div>
  ) : (
    loading && <p>loading...</p>
  );
};
export default BookByTitle;
