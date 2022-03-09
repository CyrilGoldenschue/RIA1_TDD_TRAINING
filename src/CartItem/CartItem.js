/**
 * @file      CartItem.js
 * @brief     This class is designed to manage a cart item.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";
const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #quantity;
    #price;
    #name;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a CartItem Object
     * @param articleId
     * @param quantity
     * @param price (in CHF)
     * @param name
     * @exception InvalidArticleIdException is thrown when the article is smaller than 1.
     * @exception InvalidQuantityException is thrown when the quantity is smaller than 1.
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    constructor(articleId, name, quantity, price) {
        if (articleId < 1) {
            throw new InvalidArticleIdException();
        }

        this.#articleId = articleId;
        this.quantity = quantity;
        this.price = price;
        this.#name = name;
    }

    /**
     * @brief This property gets the article id
     */
    get articleId() {
        return this.#articleId;
    }

    /**
     * @brief This property gets the quantity
     */
    get quantity() {
        if (this.#quantity < 0) {
            throw new InvalidQuantityException();
        }
        return this.#quantity;

    }

    set quantity(value) {
        if (value < 0) {
            throw new InvalidQuantityException();
        }

        this.#quantity = value;
    }

    /**
     * @brief This property gets the price
     */
    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 10) {
            throw new InvalidPriceException();
        }

        this.#price = value;
    }

    get name(){
        return this.#name;
    }

    /**
     * @brief This property gets the total
     */
    get total() {
        return this.#quantity * this.#price;
    }



    //endregion public methods

    //region private methods
    //endregion private methods
}

