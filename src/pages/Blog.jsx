import React from "react";
import "./myStyle.css";
function Blog() {
  return (
    <>
      <img src="mypic.JPG" width="300" height="200" />

      <p>I have developed the following projects:</p>
      <ol className="blog">
        <b>
          <li>Web based communication system </li>
        </b>
        <b>
          <li>Web based hotel management system</li>
        </b>
        <b>
          <li>AI based Customer support chatbot</li>
        </b>
        <b>
          <li>Blood donation managment system using Java</li>
        </b>
      </ol>
      <br />
      <br />
      <br />

      <hr></hr>
      <footer>
        Developed by <a href="about">Seifedin </a> @2023 <br />
        <a href="https://t.me//seyfbing">
          <img src="teleg.jpg" width="50" height="30"></img>
        </a>
        <a href="www.facebook.com/sey fedin">
          <img src="fb.jpg" width="70" height="40"></img>
        </a>
        <a href="www.linkedin.com/in/seifedin-mohammed-9b3919243">
          <img src="linkdin.png" width="50" height="30"></img>
        </a>
      </footer>
    </>
  );
}

export default Blog;
