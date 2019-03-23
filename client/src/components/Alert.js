import React from "react";
import "./css/Alert.css";

let alertStatus = "";

const Alert = (props) => {

    const componentWillMount = () => {
        switch(props.status) {
            case ("red"):
              alertStatus = "red-alert";
              break;
            default:
              alertStatus = "blue-alert";
          }
    }

    componentWillMount();

    return(
        <div className={`alert ${alertStatus} ${props.className}`}>
            {props.children}
        </div>
    );

}

export default Alert;