import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../addcategory.css";


function AddCategory() {
  const history = useNavigate();
  const nameRef = useRef();
  const [user, setUser] = useState()

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user")
    if (userFromLocalStorage){
        setUser(userFromLocalStorage)
    }
    }, []);


  function addCategory() {
    const nameInfo = nameRef.current.value; 
    const newCateg = {
      categoryName: nameInfo,
    };

    //add token to header
    const config = {
      headers: { Authorization: `Bearer ${user}` }
    };
    //post data to api
    axios.post("https://localhost:7002/api/Category", newCateg,config).then(history("/"));
  }
  return (
    <div className="container6">
      <div className="form-wrapper6">
        <h1 className="titluladdC">Add Category</h1>
        <label htmlFor="categoryName">categoryName</label>
        <input type="text" required id="name" ref={nameRef} />  
     
      <button onClick={addCategory}>Add Category</button>
      </div>
    </div>
  );
}
export default AddCategory;