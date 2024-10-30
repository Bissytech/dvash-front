import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminpage.css";

const Managepage = () => {
  const [data, setData] = useState([]);
  const [updateDel, setupdateDel] = useState(false);
  const [gottenData, setgottenData] = useState(false)
  const [editdata, seteditdata] = useState({});
  const [coverimage, setcoverimage] = useState(null);
  // const [generalid, setgeneralid] = useState("");

  useEffect(() => {
    axios
      .get("https://dvashdrinks-back.onrender.com/admin/manageproduct")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateDel, gottenData]);

  const handledelete = (id) => {
    setupdateDel(true);
    axios
      .delete(`https://dvashdrinks-back.onrender.com/admin/manageproduct/${id}`)
      .then((res) => {
        setData(data.filter((item) => item.id !== id));

        setupdateDel(false);
      })
      .catch((error) => {
        console.error("Error deleting the product", error);
        setupdateDel(false);
      });
  };

  const handleedit = (i) => {
   
    console.log(i);

    console.log(i);
    console.log(data[i]);
    seteditdata(data[i]);

    // axios
    //   .get(`http://localhost:5005/admin/manageproduct/${id}`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error("Error editing the product", error);
    //   });
  };
  const updateproduct = () => {
    
    axios.post(`https://dvashdrinks-back.onrender.com/admin/updateproduct` , editdata)
      .then((res) => {
        setgottenData(true)
        console.log(res);
      })
      .catch((error) => {
        console.error("Error updating the product", error);
      });
  };
  const change = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setcoverimage(e.target.result);
      console.log(e.target.result);

      seteditdata({ ...editdata, coverimage: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <table className="tableItems">
        <tr>
          <th>S/N</th>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th></th>
          <th></th>
        </tr>
        {data.map((info, i) => (
          <tr key={info.id} className="tableBody">
            <td>{i + 1}</td>
            <td>
              <img src={info.coverimage} alt="" />
            </td>
            <td>{info.productname}</td>
            <td>{info.productdescription}</td>
            <td>{info.productprice}</td>
            <td>
              <button
                onClick={() => handledelete(info._id)}
                type="button"
                className="delButtn"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => handleedit(i , info._id)}
                type="button"
                className="editButtn"
                // onClicke={() => handleedit(info._id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
      {/*modal */}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Edit List
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                className="form form-control mt-3"
                type="text"
                value={editdata.productname}
                onChange={(e) =>
                  seteditdata({ ...editdata, productname: e.target.value })
                }
                name="productname"
              />
              <input
                className="form form-control mt-3"
                type="text"
                value={editdata.productdescription}
                onChange={(e) =>
                  seteditdata({
                    ...editdata,
                    productdescription: e.target.value,
                  })
                }
              />
              <input
                className="form form-control mt-3"
                type="text"
                value={editdata.productprice}
                onChange={(e) =>
                  seteditdata({ ...editdata, productprice: e.target.value })
                }
              />

              <div>
                {/* <input type="file" onChange={(e)=>change}/> */}
                <input type="file" id="coverimg" onChange={(e) => change(e)} />
                <img src={editdata.coverimage} alt="" width={250} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => updateproduct(e)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managepage;
