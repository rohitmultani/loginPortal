import React, { Fragment } from 'react';
import classes from './Style.module.css'
const Image=()=>{
    return(
        <Fragment>
            <img src="https://picsum.photos/800/300" alt="img" className={classes.img}/> 
        </Fragment>
    )
}
export default Image;