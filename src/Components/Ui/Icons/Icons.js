import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from "./Icons.module.scss";

const fontIcons = (props) => {

    return <FontAwesomeIcon onClick={props.clicked} className={[classes.FontAwesomeIcon, classes[props.position], classes[props.fontSize], classes[props.color]].join(' ')} icon={props.icon} />;
}

export default fontIcons
