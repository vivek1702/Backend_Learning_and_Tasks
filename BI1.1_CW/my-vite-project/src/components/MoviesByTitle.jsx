import useFetch from "../useFetch";

const MoviesByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/movies/${title}`
  );

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>{data.director}</p>
      <p>{data.actors.join(", ")}</p>
      <p>{data.rating}</p>
      <p>{data.genre.join(", ")}</p>
      <p>{data.country}</p>
      <p>{data.releaseYear}</p>
      <img src={data.posterUrl} alt="posterImage" />
    </div>
  ) : (
    loading && <p>loading...</p>
  );
};

export default MoviesByTitle;
