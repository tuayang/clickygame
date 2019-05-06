import React from "react";
import "./Wrapper.css";

const Title = props => <h1 className="title">{props.children}</h1>;
      
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;

