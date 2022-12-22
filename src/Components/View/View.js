import React,{useEffect,useState,useContext} from 'react';
import {PostContext} from '../../context/postContext'
import { FirebaseContext } from '../../context/Context'
import { collection, query, where, getFirestore,getDocs } from "firebase/firestore"
import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState('')
  const {postDeatils}=useContext(PostContext)
  const {firebase} =useContext(FirebaseContext)
  const db = getFirestore(firebase);
  useEffect(()=>{
    const {userId}=postDeatils
    const q = query(collection(db, "users"), where("id", "==", userId))
    getDocs(q).then((res)=>{
      res.forEach((doc)=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDeatils.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDeatils.price} </p>
          <span>{postDeatils.name}</span>
          <p>{postDeatils.category}</p>
          <span>{postDeatils.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
