/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");
const CartItemNotFoundException = require("./CartItemNotFoundException.js")
module.exports = class Cart {

    //region private attributes
    #items = null;

    //endregion private attributes


    /**
     * @brief This method constructs a Cart Object
     * @param items : list of cartItems
     */
    constructor(items = null) {
        this.#items = items;
        //this.updateCart(items);
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get items() {
        if (this.#items != null) {
            return this.#items;
        }
        throw new EmptyCartException();
    }

    count(distinct = false) {
        if (this.#items != null) {
            let number = 0;
            if (distinct) {
                this.#items.forEach((item) => {
                    number++;
                })
            } else {
                this.#items.forEach((item) => {
                    number += item.quantity;
                })
            }

            return number
        }
        throw new EmptyCartException();

    }

    updateCart(items) {
        if (items == null) {
            throw new UpdateCartException();
        }
        this.#items = items;
    }

    removeCartItem(itemsToRemove) {
        itemsToRemove.forEach((itemToRemove) => {
            let index = this.#items.indexOf(itemToRemove)
            if(index == -1){
                throw new CartItemNotFoundException();
            }
            this.#items = this.#items.slice(index, 1);
        })


    }

    emptyCart(){
        if(this.#items == null) {
            throw new EmptyCartException();
        }
        this.#items = null;

    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get totalPrice() {
        let total = null;
        if (this.#items == null) {
            throw new EmptyCartException();
        } else {
            this.#items.forEach((item) => {
                total += item.total;
            })
            return total;
        }

    }

    //endregion public methods

    //region private methods
    //endregion private methods
}