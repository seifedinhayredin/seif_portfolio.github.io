import styles from "./mine.module.css";
const Contact = () => {
  return (
    <>
      <img src="mypic.JPG" width="300" height="200" />
      <h2 className={styles.bigblue}>My contact information</h2>
      <p>
        Phone: <i>0964088015</i>
      </p>
      <p>
        Email: <i>seifedinhayredin@gmail.com</i>
      </p>

      <hr></hr>
      <footer>
        {" "}
        Developed by <a href="about">Seifedin </a> @2023
      </footer>
      <a href="https://t.me//seyfbing">
        <img src="teleg.jpg" width="50" height="30"></img>
      </a>
      <a href="www.facebook.com/sey fedin">
        <img src="fb.jpg" width="70" height="40"></img>
      </a>
      <a href="www.linkedin.com/in/seifedin-mohammed-9b3919243">
        <img src="linkdin.png" width="50" height="30"></img>
      </a>
    </>
  );
};

export default Contact;
