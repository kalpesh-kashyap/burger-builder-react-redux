import React, {Component} from 'react';
import Aux from '../../hoc/ReacrAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICE = {
    salad: 5,
    bacon: 8,
    cheese: 15,
    meat: 20
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        canOrder: false
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({purchasable: !!sum});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICE[type],
            ingredients: updatedIngredients
        });
        // this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type]) {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            this.setState({
                totalPrice: this.state.totalPrice - INGREDIENT_PRICE[type],
                ingredients: updatedIngredients
            });
            // this.updatePurchaseState(updatedIngredients);
        }
    };

    purchaseHandler = () => {
        this.setState({canOrder: !!this.state.totalPrice});
    };

    closeModalHandler = () => {
        this.setState({canOrder: false});
    };

    purchaseContinuedHandler = () => {
        alert("You continued purchase")
    };

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = !disableInfo[key]
        }
        return (
            <Aux>
                <Modal toggleModal={this.state.canOrder}
                       modalClsed={this.closeModalHandler}>
                    <OrderSummery
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        modalClosed={this.closeModalHandler}
                        purchaseContinued={this.purchaseContinuedHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    totalPrice={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={!this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;