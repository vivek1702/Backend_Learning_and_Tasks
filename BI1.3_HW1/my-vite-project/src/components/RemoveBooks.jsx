import { useState } from "react";
import useFetch from "../useFetch";

const RemoveBooks = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, setLoading, error } = useFetch("http://localhost:3000/books");

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("failed to delete data");
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("deleted success");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <h2>Books List</h2>
      <ul>
        {data?.map((item) => (
          <li key={item._id}>
            {item.title}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RemoveBooks;
// onClick={() => handleDelete(item._id)}
