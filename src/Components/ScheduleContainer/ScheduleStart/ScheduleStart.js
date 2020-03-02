import React from 'react'
import classes from "./ScheduleStart.module.scss";
import Button from '../../Ui/Button/Button'
import { Row} from 'react-bootstrap';

const scheduleStart  = (props) => {

    return (
      <div className={classes.ScheduleStart}>
        <div className={classes.ScheduleItems}>
          <h1>WELCOME BACK SAM</h1>
          <p>START YOUR DAY WITH A NEW TASK</p>
          <Row className={classes.Row}>
            <Button clicked={props.addTask} btnType="Rounded" color='blue-outline'>
              ADD TASK
            </Button>
            <Button clicked btnType="Rounded" color='blue-outline'>
              VIEW TASK
            </Button>
          </Row>
        </div>
      </div>
    );
} 

export default scheduleStart;