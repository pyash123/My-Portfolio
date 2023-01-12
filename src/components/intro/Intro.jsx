import "./intro.css";
import me from "../../img/me.png";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Yash Pandey</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Java developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Cricketer</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a web developer and also design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        
          </div>
          <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;