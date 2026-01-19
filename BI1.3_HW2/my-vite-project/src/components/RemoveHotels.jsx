import { useState } from "react";
import useFetch from "../useFetch";

const RemoveHotelByID = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("http://localhost:3000/hotels");
  console.log(data);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("failed to delete hotel");
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("data deleted success");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <h3>All Hotels List</h3>
      <ul>
        {data?.map((item) => (
          <li key={item._id}>
            {item.name}{" "}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RemoveHotelByID;
