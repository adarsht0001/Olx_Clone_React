import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Heart from "../../assets/Heart";
import "./Post.css";
import { FirebaseContext } from "../../context/Context";
import { PostContext } from "../../context/postContext";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [product, setProduct] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();
  const db = getFirestore(firebase);
  useEffect(() => {
    getDocs(collection(db, "products")).then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProduct(allPost);
    });
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {product.map((element, i) => {
            return (
              <div
                className="card"
                key={i}
                onClick={() => {
                  setPostDetails(element);
                  navigate("/view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={element.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {element.price}</p>
                  <span className="kilometer">{element.category}</span>
                  <p className="name">{element.name}</p>
                </div>
                <div className="date">
                  <span>{element.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
