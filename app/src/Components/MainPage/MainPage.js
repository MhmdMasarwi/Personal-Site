import React from "react";
import "./MainPage.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function ListItem({ text }) {
  return (
    <div className="list__item">
      <p>{text}</p>
      <KeyboardDoubleArrowDownIcon />
    </div>
  );
}
function MainPage() {
  return (
    <div className="mainpage">
      <div className="opacity__window"></div>
      <div className="mainpage__content">
        <section className="mainPage_content">this is the main page</section>
        <ul className="subject__list">
          <li>
            <ListItem text={"About Us"} />
          </li>
          <li>
            <ListItem text={"About Us"} />
          </li>
          <li>
            <ListItem text={"About Us"} />
          </li>
          <li>
            <ListItem text={"About Us"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
