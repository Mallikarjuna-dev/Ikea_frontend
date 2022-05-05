import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CategoriesSelect } from "./CategoriesSelect";
export const AddProduct = () => {
  const [catArr, setCatArr] = useState([]);
  const [catId, setCatId] = useState("");

  const [form, setForm] = useState({
    title: "",
    price: "",
    mrp: "",
    category: catId,
    package: "",
    description: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get("http://localhost:8000/categories").then(({ data }) => {
      console.log(data);
      set(data);
    });
  };

  //setting up the categories arr
  const set = (data) => {
    setCatArr([...data]);
    console.log("catArr", catArr);
  };
  //send category id to reference
  const selectCat = (id) => {
    setCatId(id);
    // console.log(catId);
    form.category = id;
    console.log(id);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form State", form);
    axios
      .post(`http://localhost:8000/products`, form)
      .then(() => {
        alert("Product Added Succesfully");
      })
      .catch((err) => {
        alert("Error Try Again");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };
  return (
    <div>
      <h2>Select Any one category</h2>
      {catArr.map((el) => {
        return (
          <CategoriesSelect key={el._id} item={el} selectCat={selectCat} />
        );
      })}

      <br />
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={form.title}
          type="text"
          id="title"
          placeholder="title"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.price}
          type="text"
          id="price"
          placeholder="price"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.mrp}
          type="text"
          id="mrp"
          placeholder="mrp"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.package}
          type="text"
          id="package"
          placeholder="packaging info"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.description}
          type="text"
          id="description"
          placeholder="description"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.img1}
          type="text"
          id="img1"
          placeholder="Image Link 1"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.img2}
          type="text"
          id="img2"
          placeholder="Image Link 2"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.img3}
          type="text"
          id="img3"
          placeholder="Image Link 3"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.img4}
          type="text"
          id="img4"
          placeholder="Image Link 4"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" value={"Add Product"} />
        <br />
      </form>
    </div>
  );
};
