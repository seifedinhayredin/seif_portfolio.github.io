import { useState } from "react";
import "./myStyle.css";
function Abb() {
  const [mine, setMine] = useState({
    name: "Seifedin Hayredin",
    dept: "computer science",
    msc: "Arteficial intelligence",
  });

  return (
    <>
      <img src="mypic.JPG" width="200" height="100" />
      <p>
        My name is <b>{mine.name}</b>. I have bachelor degree in {mine.dept} and
        now i am been learning masters degree in {mine.msc}.
      </p>
      <p>
        I am a front end developer and junior <b>AI engineer</b> and i have
        about three years of experiance as a front end developer
      </p>
      <div>
        <h2>Experianced in the following programming and Markup languages:</h2>
        <table className="tab">
          <tr>
            <th>Prog lang</th>
            <th>Markup</th>
            <th>Back End</th>
            <th>Frameworks</th>
            <th>Preprocessor</th>
            <th>Tools</th>
          </tr>
          <tr>
            <td>Java</td>
            <td>HTML</td>
            <td>Oracle</td>
            <td>React</td>

            <td>Sass</td>
            <td>Adobe Photoshop</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>CSS</td>
            <td>MySQl</td>
            <td>Tenserflow</td>
            <td></td>
            <td>Illustrator</td>
          </tr>
          <tr>
            <td>Php</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Filmora</td>
          </tr>
          <tr>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>C++</td>
          </tr>
        </table>
      </div>

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
export default Abb;
