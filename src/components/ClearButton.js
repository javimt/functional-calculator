import React from "react";
import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (
  <div className='ClearButton' onClick={props.clickManage}>
    {props.children}
  </div>
);
  
export default ClearButton;