import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../addproduct.css";

function AddProduct() {
  //starea pentru poza
  const [photo, setPhoto] = useState([]);
  const [user, setUser] = useState()
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user")
    if (userFromLocalStorage){
        setUser(userFromLocalStorage)
    }
    axios.get("https://localhost:7002/api/Category")
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => {
      console.log(error);
    });

    }, []);

  const history = useNavigate();
  //referinte pentru inputuri
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const categIdRef = useRef();
  const quantityRef=useRef();

  //functie pentru alegerea pozei
  function changeHandler(event) {
    setPhoto(event.target.files[0]);
  }

  //functie pentru adaugarea unui produs
  function addProd() {

    const titleInfo = titleRef.current.value;
    const priceInfo = priceRef.current.value;
    const quantityInfo=quantityRef.current.value;
    const descriptionInfo = descriptionRef.current.value;
    var categIdInfo = categIdRef.current.value;

    const newProduct = new FormData();
    newProduct.append("title", titleInfo);
    newProduct.append("description", descriptionInfo);
    newProduct.append("price", priceInfo);
    newProduct.append("categoryId", categIdInfo);
    newProduct.append("quantity",quantityInfo);
    newProduct.append("photo", photo);

    //add token to header
    const config = {
      headers: { Authorization: `Bearer ${user}` }
    };
    //post data to api
    axios.post("https://localhost:7002/api/Product", newProduct,config).then(history("/"));
  }
  return (
    //formular pentru adaugarea unui produs
    <div className="container4">
     <div className="form-wrapper">
        <h1 className="titluladd">Add Product</h1>
        <label htmlFor="Title">Title</label>
        <br/>

        <input type="text" required id="title" ref={titleRef} />
        <br/>
        <label htmlFor="description">Description</label>
        <br/>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionRef}
        ></textarea>
        <br/>

        <label htmlFor="price">Price</label>
        <br/>
        <input type="text" required id="price" ref={priceRef} />
        <br/>

        <label htmlFor="quantity">Quantity</label>
        <br/>
        <input type="text" required id="quantity" ref={quantityRef} />
        <br/>

        <label htmlFor="categId">Category ID</label>
        <br />
        <select id="categId" required ref={categIdRef}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="Photo">Photo</label>
        <br/>
        <input
          type="file"
          required
          id="photo"
          name="photo"
          onChange={changeHandler}
        />
        <br/>

     
      <button onClick={addProd}>Add Product</button>
    </div>
    </div>
  );
}
export default AddProduct;