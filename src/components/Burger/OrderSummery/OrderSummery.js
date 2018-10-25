import React from 'react';
import Aux from '../../../hoc/ReacrAux';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>)
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Danger" clicked={props.modalClosed}>Cancel</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
};

export default orderSummery;