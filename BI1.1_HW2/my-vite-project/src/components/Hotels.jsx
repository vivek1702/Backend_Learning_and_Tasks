import useFetch from "../useFetch";

export default function Hotels() {
  const { data, loading, error } = useFetch("http://localhost:3000/hotels");
  return (
    <>
      <h2>All Hotels</h2>
      <ul>
        {data?.map((items) => (
          <li>{items.name}</li>
        ))}
      </ul>
    </>
  );
}
