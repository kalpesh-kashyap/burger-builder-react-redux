import React from 'react';
import classes from './buildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price : {props.totalPrice.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.label}
                key={ctrl.type}
                itemAdded={() => props.ingredientAdded(ctrl.type)}
                itemRemoved={() => {props.ingredientRemoved(ctrl.type)}}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button
            className={classes.OrderButton}
            disabled={props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;