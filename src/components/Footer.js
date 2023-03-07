import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(fab, fas);

export default function Footer() {
  const sendEmail = () => {
    window.location.href = "mailto:ulloajazz6@gmail.com";
  };
  const iconStyle = {
    margin: "10px",
  };
  return (
    <footer style={{ display: "flex", justifyContent: "center"}}>
      <p>
        <a href="https://github.com/silkyjazz" target="blank"  className="icon">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            style={iconStyle}
          />
        </a>
        <a href="https://www.linkedin.com/in/jasmineulloa/" target="blank" className="icon">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size="2x"
            style={iconStyle}
          />
        </a>
        <FontAwesomeIcon
          onClick={sendEmail}
          icon={["fa", "envelope"]}
          size="2x"
          style={iconStyle}
          className="icon"
        />
                <a href="https://www.pinterest.com/silkyjazz222/" target="blank" className="icon">
                  <FontAwesomeIcon 
                  icon="fa-brands fa-pinterest" 
                  size="2x"
                  style={iconStyle}/>
        </a>
      </p>
    </footer>
  );
}
