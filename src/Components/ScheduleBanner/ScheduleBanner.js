import React from "react";
import classes from "./ScheduleBanner.module.scss";
import FontIcon from "../Ui/Icons/Icons";
import {connect} from 'react-redux'
import { Row, Col } from "react-bootstrap";


const scheduleBanner = (props) =>  {

  let IconClass = null
  if (props.auth) {
    IconClass = null
  }
  else {
    IconClass = (
      <FontIcon
        clicked={props.clicked}
        //  position="left"
        icon="bars"
        fontSize="md"
        color="white"
      />

    )
  }

    return (

      <div className={classes.ScheduleBanner}>
        <Row className={classes.BannerRow}>
          <Col xs={3} className={classes.BannerIcon}>
           {IconClass}
          </Col>
          <Col className={classes.BannerLogo} xs={6}>FS-SCHEDULE</Col>

          <Col xs={3} className={classes.BannerTask}>
            {/* <FontIcon
              //  position="left"
              icon="tasks"
              fontSize="lg"
              color="white"
            /> */}
          </Col>
        </Row>

      </div>

    );
 

 
};

const mapStateToProps = state => {
  return {
    auth: state.authReducer.token === null
  }
}

export default connect(mapStateToProps, null)(scheduleBanner)
