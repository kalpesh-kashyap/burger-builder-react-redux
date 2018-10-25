import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/ReacrAux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.toggleModal} clicked={props.modalClsed}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.toggleModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.toggleModal ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);
export default modal;