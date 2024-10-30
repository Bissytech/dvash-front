import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import './adminpage.css'
const Postpage = () => {
  const [productname, setproductname] = useState("");
  const [productdescription, setproductdescription] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productCategory, setproductCategory] = useState("");
  // const [imagename, setimagename] = useState("")
  const [coverimage, setcoverimage] = useState("");

  const handleimage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setcoverimage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const addproduct = (event) => {
    event.preventDefault();
    console.log(productname, productdescription, productprice , productCategory);
    axios
      .post("https://dvashdrinks-back.onrender.com/admin/postproduct", {
        productname,
        productdescription,
        productprice,
        coverimage,
        productCategory
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
    setTimeout(() => {
      setproductname("");
      setproductdescription("");
      setproductprice("");
      setcoverimage("");
      document.getElementById("coverimg").value = "";
    }, 5000);
  };

  return (
    <>
      <form className='"w-50 mx-auto px-3 py-3 shadow" theText' action="">
        <h1>Add a Product</h1>
        <div className="form-control mt-3">
          <label htmlFor="">Product Name</label>

          <input
            value={productname}
            onInput={(e) => setproductname(e.target.value)}
            type="text"
            // className="form-control"
          />
        </div>
        <div className="form-control mt-3">
          <label htmlFor="">Product Description</label>
          <br />
          <input
            value={productdescription}
            onInput={(e) => setproductdescription(e.target.value)}
            type="text"
            // className="form-control"
          />
        </div>
        <div className="form-control mt-3">
          <label htmlFor="">Product Price</label>
          <br />
          <input
            value={productprice}
            onInput={(e) => setproductprice(e.target.value)}
            type="text"
            // className="form-control"
          />
        </div>
        <div className="form-control mt-3">
          <label htmlFor="">Product Image</label>
          <br />
          <input
            id="coverimg"
            onChange={handleimage}
            type="file"
            // className="form-control"
          />
          <img value={coverimage} src={coverimage} alt="" width={250} />
        </div>

        <div className="form-control mt-3">
          <label htmlFor="">Product category</label>
          <select name="" id="" onChange={(e)=>setproductCategory(e.target.value)}>
            <option value="">choose category</option>
            <option value="drinks">drinks</option>
            <option value="parfaits">parfaits</option>
          </select>
        </div>
        <div className="form-group mt-3 clickButtn">
          <button
            onClick={addproduct}
            type="button"
            className="btn btn-success"
          >
            Add Product
          </button>
        </div>
        <ToastContainer position="top-right" />
      </form>
    </>
  );
};

export default Postpage;
