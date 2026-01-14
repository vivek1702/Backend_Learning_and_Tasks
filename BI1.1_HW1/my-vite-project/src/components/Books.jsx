import useFetch from "../useFetch";

const AllBooks = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/books");
  //console.log(data);
  return (
    <>
      <h1>All books</h1>
      <div>
        {data ? (
          <ul>
            {data.map((items) => (
              <li>{items.title}</li>
            ))}
          </ul>
        ) : (
          loading && <p>loading...</p>
        )}
      </div>
    </>
  );
};

export default AllBooks;
