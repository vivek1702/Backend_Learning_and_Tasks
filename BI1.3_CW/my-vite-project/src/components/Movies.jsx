import { useState } from "react";
import useFetch from "../useFetch";

const Movies = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("http://localhost:3000/movies");
  //console.log(data);

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("failed to delete movie");
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("movie deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {data?.map((items) => (
          <li key={items._id}>
            {items.title}{" "}
            <button onClick={() => handleDelete(items._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
