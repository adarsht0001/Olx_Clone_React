import React,{useEffect,useState,useContext} from 'react';
import {PostContext} from '../../context/postContext'
import './View.css';
function View() {
  const {postDeatils}=useContext(PostContext)
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
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
