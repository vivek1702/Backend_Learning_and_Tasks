import useFetch from "../useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/author/${author}`
  );
  //console.log(data);
  return data ? (
    <div>
      <h3>Books by {author}</h3>
      <ul>
        {data.map((items) => (
          <div>
            <li>{items.title}</li>
          </div>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>loading...</p>
  );
};

export default BooksByAuthor;
