import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer container">
        <div className="header-logo">
          <Link to="/">
            <img className="main-logo" src="./img/logo2.png" alt="Main-logo" />
          </Link>
        </div>
        <div className="footer-content">
          <p>Tel : 02-2088-6653 (Artist), 02-2088-5247 (Actor) </p>
          <p>E-mail : amhment@naver.com</p>
          <p>Address : 서울특별시 강남구 도산대로 37길 5, 별관 5-6층</p>
          <p>© 2023 ALOMALO HUMAIN ENT. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
