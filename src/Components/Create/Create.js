import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { getFirestore, collection ,addDoc} from "firebase/firestore";
import { FirebaseContext, AuthContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const {user}=useContext(AuthContext)
  const db = getFirestore(firebase)
  const storage = getStorage(firebase);
  const navigate =useNavigate()
  const date=new Date()
  const handleSubmit = () => {
    const storageRef = ref(storage, `/images/${image.name}`)
    uploadBytes(storageRef, image).then(({ref}) => {
      getDownloadURL(ref).then((url)=>{
        addDoc(collection(db,'products'),{
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        }).then(()=>navigate('/'))
      })
    })
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
