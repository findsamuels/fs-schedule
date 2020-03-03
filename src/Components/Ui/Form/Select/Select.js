import React from 'react'
import classes from './Select.module.scss'
import ErrorBoundry from '../../../../Hoc/ErrorBoundry/ErrorBoundry';
const select = (props) => {

    return (
<ErrorBoundry>
        <select
          className={[classes.Select, classes[props.styles]].join(' ')}
          onChange={props.onChange}
            value={props.value}
        >
          {props.children}
        </select>
</ErrorBoundry>


     
    );
}

export default select