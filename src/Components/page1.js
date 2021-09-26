import "../index.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Page1(){
    return(
        <div className="container">
        <div className="header">
          <h2>Site Name</h2>
          <div className="X">
            <h2 className="Title">Some X</h2>
          </div>
        </div>
        <div className="left-top">
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
        </div>
        <div className="middle">
          <h2>Page 1 Title</h2>
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
        </div>
        <div className="right">
          <div className="menu">
            <ul>
              <li>
                <a><Link to="/" >Page 1</Link></a>
              </li>
              <li>
                <a><Link to="/page2" >Page 2</Link></a>
              </li>
              <li>
                <a><Link to="/page3" >Page 3</Link></a>
              </li>
              <li>
                <a><Link to="/page4" >Page 4</Link></a>
              </li>
              <li>
                <a><Link to="/page5" >Page 5</Link></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-bottom">
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
          <img
            className="image-leftside"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            alt=""
          />
        </div>
        <div className="footer">
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
          <div className="Y">
            <h2 className="Title">Some Y</h2>
          </div>
        </div>
      </div>
    )
}

export default Page1;