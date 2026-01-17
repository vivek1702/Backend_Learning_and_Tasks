import { useState } from "react";

const AddBooksForm = () => {
  const [formdata, setformData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((preValue) => ({
      ...preValue,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formdata);
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        console.log("unable to add book data");
      }

      const data = await response.json();
      console.log("added movie", data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h2>Fill Book Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          name="title"
          value={formdata.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Author: </label>
        <br />
        <input
          type="text"
          name="author"
          value={formdata.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Publish Year: </label>
        <br />
        <input
          type="number"
          name="publishedYear"
          value={formdata.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Genre: </label>
        <br />
        <input
          type="text"
          name="genre"
          value={formdata.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Language: </label>
        <br />
        <input
          type="text"
          name="language"
          value={formdata.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Country: </label>
        <br />
        <input
          type="text"
          name="country"
          value={formdata.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating: </label>
        <br />
        <input
          type="number"
          name="rating"
          value={formdata.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Summary: </label>
        <br />
        <input
          type="text"
          name="summary"
          value={formdata.summary}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Image URL: </label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formdata.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksForm;
